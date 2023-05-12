const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ message: "Invalid Email or Password" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send({ message: "Invalid Email or Password" });
    }

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged in successfully" });
  } catch (error) {
    console.error(error); // Print the error for debugging purposes
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/profile", async (req, res) => {
  try {
    // Extract the JWT token from the request headers
    const token = req.headers.authorization.split(" ")[1];
    // Verify and decode the token
    const decodedToken = jwt.verify(token, secretKey);
    // Get the user ID from the decoded token
    const userId = decodedToken.id;
    // Find the user by ID
    const user = await User.findById(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Return the user profile details
    res.status(200).send({ user });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});


const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: "No token provided" });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Invalid token" });
    }
    req.userId = decoded.id;
    next();
  });
};

// Apply the middleware to the /profile route
router.get("/profile", verifyToken, async (req, res) => {
  // ...
});


module.exports = router;
