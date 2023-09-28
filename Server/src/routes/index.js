const router = require("express").Router();
const getCharById  = require('../controllers/getCharById')
const getLogin = require("../controllers/getLogin");
const postUser = require("../controllers/postUser");

router.get("/character/:id", getCharById);
router.get("/login", getLogin);
router.post("/login", postUser);

module.exports = router;