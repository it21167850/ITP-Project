const payment = require("../models/payment");
const bcrypt = require("bcrypt");

const Addpayment = async (req, res, next) => {
  const { cardnumber, Edate, Cvv, Name } = req.body;
  let Payment;

  try {
    const hashnumber = await bcrypt.hash(req.body.cardnumber, 16);
    const hashnumber1 = await bcrypt.hash(req.body.Cvv, 3);
    Payment = new payment({
      cardnumber: hashnumber, // store the hash instead of the plain text card number
      Edate,
      Cvv: hashnumber1,
      Name,
    });
    await Payment.save();
  } catch (err) {
    console.log(err);
  }

  if (!Payment) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ Payment });
};

exports.Addpayment = Addpayment;
