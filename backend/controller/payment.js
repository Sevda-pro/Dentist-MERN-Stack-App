const Razorpay = require('razorpay');
const Order = require('../models/payment.js');
const User = require('../models/signup.js');
require('dotenv').config();

const purchasePremium = async (req, res, next) => {
	try {
		var rzp = new Razorpay({
			key_id: process.env.PAY_ID,
			key_secret: process.env.PAY_SECRET,
		});

		const amount = 30000;

		rzp.orders.create({ amount, currency: "INR" }, (err, order) => {
			if (err) {
				console.log(err);
				res.json({ message: err, success: false });
			}

			Order.create({ orderid: order.id, status: "PENDING", paymentid: "NULL", customerid: req.user._id })
				.then(() => {
					return res.status(201).json({ order, key_id: rzp.key_id });
				})
				.catch((err) => {
					res.json({ message: err, success: false });
				});
		});
	} catch (error) {
		console.log(error);
		res.status(401).json({ message: error, success: false });
	}
};

const updateTransactionStatus = async (req, res, next) => {
	try {
		const { payment_id, order_id } = req.body;
		const order = await Order.findOne({ orderid: order_id });

		await Order.updateOne({ orderid: order_id }, { $set: { paymentid: payment_id, status: "successfull" } });
		
		const customer = await User.findOne({  _id: req.user._id } );
		await User.updateOne({ _id: req.user._id }, { $set: { isPremiumUser: true } });

		return res.status(202).json({ success: true, message: "transaction successful" });
	} catch (error) {
		console.log(error);
		res.json({ message: error, success: false });
	}
};

const updateTransactionStatusFailed = async (req, res, next) => {
	try {
		const { payment_id, order_id } = req.body;
		await Order.updateOne({ orderid: order_id }, { $set: { paymentid: payment_id, status: "failed" } });
		return res.status(202).json({ success: true, message: "updated successfully" });
	} catch (error) {
		console.log(error);
		res.json({ message: error, success: false });
	}
};
const check = async (req, res, next) => {
	try {
        let response=await Order.findOne({customerid:req.user._id})
		res.status(202).json({ success: true, result:response });
	} catch (error) {
		console.log(error);
		res.json({ message: error, success: false });
	}
};

module.exports = { purchasePremium, updateTransactionStatus, updateTransactionStatusFailed,check };
