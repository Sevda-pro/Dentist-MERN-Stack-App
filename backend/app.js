const express = require('express')
const app = express();
const cors = require('cors')
const Sib = require("sib-api-v3-sdk");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const connectDB = require('./db.js')
const bodyParser = require("body-parser");
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000
const OWN_URL = process.env.OWN_URL || 'http://localhost:5000'
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'
const User = require('./models/signup.js')
const Appointment=require('./models/appointment.js')
const premium_route=require('./routes/payment.js')
const Consultation=require('./models/consultation.js')
app.use('/purchase',premium_route)
const authentication = async (req, res, next) => {
    try {

        const token = req.header("Authorization");
        const { userId } = jwt.verify(token, "secretKey");
        // console.log(userId);
        let currUser = await User.findById(userId);
        req.user = currUser;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: error });
    }
};
function generateAccessToken(id) {
    let x = jwt.sign({ userId: id }, "secretKey");
    return x;
}
app.post('/', async (req, res) => {
    try {
        const { email } = req.body;
        let obj = await User.findOne({ email: email });
        if (obj) {
            res.status(409).json({ message: "email already exits", success: false });
        } else {
            let salt = await bcrypt.genSalt(10);
            let hashedPassword = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashedPassword;
            let result = await User.create(req.body);
            res.status(201).json({ success: true, message: "User account created", user: result });
        }
    } catch (error) {
        console.log(error);
        res.json({ message: error, success: false });
    }
})
app.post('/meet', authentication, async(req, res, next) => {
    try{
        await Appointment.create(req.body);
        const client = Sib.ApiClient.instance;
        const apiKey = client.authentications["api-key"];
        apiKey.apiKey = process.env.API;
        const transEmailApi = new Sib.TransactionalEmailsApi();
        const sender = {
            email: "mesahilsevda@gmail.com",
        };
        const receivers = [
            {
                email: req.body.email,
            },
        ];
        const emailResponse = await transEmailApi.sendTransacEmail({
            sender,
            To: receivers,
            subject: "Don't be late",
            textContent: "Appointment Fixed",
            htmlContent: `<h3>Hi! We got the Appointment Request from you >>></h3><br/>
            Time:${req.body.timeslot}`,
        });
        res.status(200).json({message:'check your email inbox'})
    }catch(error){
        console.log('error in meet',error)
    }
    
})
app.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let obj = await User.findOne({ email: email });
        if (obj) {
            let passwordMatch = await bcrypt.compare(password, obj.password);
            if (passwordMatch) {
                res.status(200).json({ name: obj.name, message: "login successfull", success: true, token: generateAccessToken(obj._id) });
            } else {
                res.status(400).json({ success: false, message: "invalid password" });
            }
        } else {
            res.status(404).json({ success: false, message: "email does not exist" });
        }
    } catch (error) {
        res.status(500).json({ message: error, success: false });
    }
})
app.post('/consultation',authentication,async(req,res)=>{
    let obj={
        name:req.body.name,
        email:req.body.email,
        message:req.body.message,
        customerid:req.user._id
    }
    let result=await Consultation.create(obj);
    res.status(200).json({result:result})
})
const apprun = () => {
    connectDB()
    app.listen(PORT);
}
apprun();