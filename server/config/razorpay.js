// const Razorpay = require("razorpay");


// exports.instance = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY,
//     key_secret: process.env.RAZORPAY_SECRET,
// });
const Razorpay = require("razorpay");

exports.instance = new Razorpay({
  key_id: process.env["rzp_test_RDXaWd8N7ahlLh"],
  key_secret: process.env["7HItX2Vafoo2G9RUzIeLf1zw"],
});