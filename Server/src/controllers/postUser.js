const { User } = require("../db");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send("Missing data");

    const user = await User.findOrCreate({
      where: { email: email, password: password },
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postUser;