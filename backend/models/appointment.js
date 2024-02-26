const mongoose = require("mongoose");
const Appointment = new mongoose.Schema({
	email: {
		type: String,
	},
    timeslot: {
		type: String,
	},
	about: {
		type: String,
	}
});

module.exports = mongoose.model("Appointment", Appointment);