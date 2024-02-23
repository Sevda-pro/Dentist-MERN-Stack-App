const mongoose = require("mongoose");
const Premium = new mongoose.Schema({
	paymentid: {
		type: String,
	},
	orderid: {
		type: String,
	},
	status: {
		type: String,
	},
    customerid:{
        type:String,
    }
});

module.exports = mongoose.model("Premium", Premium);
