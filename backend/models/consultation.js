const mongoose = require("mongoose");
const Consultation = new mongoose.Schema({
	name: {
		type: String,
	},
    email: {
		type: String,
	    required:true,
	},
	message: {
		type: String,
	},
    customerid:{
        type:String,
    }
});

module.exports = mongoose.model("Consultation", Consultation);