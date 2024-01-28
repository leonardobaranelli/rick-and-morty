const { User } = require("../db");
const { _handleServerError, CustomError } = require('../helpers/_errorHandler');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Missing email or password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (isValidPassword) {
      return res.json({ access: true, userId: user.id });
    } else {
      return res.status(403).json({ error: "Incorrect password" });
    }

  } catch (error) {
    if (error instanceof CustomError) {
      _handleServerError(res, error);
    } else {
      _handleServerError(res, new CustomError('Internal Server Error', 500));
    }
  }
};

module.exports = login;
