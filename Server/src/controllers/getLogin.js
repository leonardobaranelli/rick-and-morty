const { User } = require("../db");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) return res.status(400).send("Missing data");
    
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).send("User not found");   

    if (user.password === password) return res.json({ access: true });
    
    else return res.status(403).send("Incorrect password");

  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = login;