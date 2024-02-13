const User = require("../models/User");

const index = async (req, res, next) => {
  try {
    const response = await User.find();
    res.json({ response });
  } catch (error) {
    res.json({ message: "Server Error" });
  }
};

const show = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const response = await User.findById(userId);
    res.json({ response });
  } catch (error) {
    res.json({ message: "Server Error" });
  }
};

// create test user
const add = async (req, res, next) => {
  try {
    const user = new User({
      firstName: "test",
      lastName: "testing",
      email: "test3@test.com",
    });
    await user.save();
    res.json({ message: "Test user created !" });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = { index, show, add };
