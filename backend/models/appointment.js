const mongoose = require("mongoose");
const Appointment = new mongoose.Schema({
	email: {
		type: String,
	},
    timeslot: {
		type: String,
	    required:true,
		unique: true,
	},
	about: {
		type: String,
	}
});

module.exports = mongoose.model("Appointment", Appointment);