const mongoose = require("mongoose");
const Payment = new mongoose.Schema({
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

module.exports = mongoose.model("Payment", Payment);
