const { User } = require("../db");
const { _handleServerError, CustomError } = require('../helpers/_errorHandler');
const bcrypt = require("bcrypt");

const postAccount = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: "Missing data" });
    }
    
    const existingAccount = await User.findOne({ where: { email } });

    if (existingAccount) {
      return res.status(409).json({ error: "User already exists" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newAccount = await User.create({ email, password: hashedPassword });

    return res.status(201).json({ account: newAccount });
  }  catch (error) {
    if (error instanceof CustomError) {
      _handleServerError(res, error);
    } else {
      _handleServerError(res, new CustomError('Internal Server Error', 500));
    }
  }
};

module.exports = postAccount;