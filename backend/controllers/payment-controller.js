const payment = require("../models/payment");

const Addpayment = async (req, res, next) => {
  const { cardnumber, Edate, Cvv, Name } = req.body;
  let Payment;

  try {
    Payment = new payment({
      cardnumber,
      Edate,
      Cvv,
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
