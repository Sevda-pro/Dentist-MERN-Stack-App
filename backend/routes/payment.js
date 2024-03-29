const express = require("express");
const router = express.Router();
const jwt=require('jsonwebtoken');
const User=require('../models/signup.js')
const {purchase,updateTransactionStatus,updateTransactionStatusFailed} = require("../controller/payment.js");
const authentication = async (req, res, next) => {
    try {

        const token = req.header("Authorization");
        const { userId } = jwt.verify(token, "secretKey");
        let currUser = await User.findById(userId);
        req.user = currUser;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: error });
    }
};
router.route("/premiummembership").get(authentication, purchase);
router.route('/updatetransactionstatus/success').post(authentication,updateTransactionStatus)
router.route('/updatetransactionstatus/failed').post(authentication,updateTransactionStatusFailed)

module.exports = router;