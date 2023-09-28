const router = require("express").Router();
const getCharById  = require('../controllers/getCharById')
const postUser = require("../controllers/postUser");

router.get("/character/:id", getCharById);
router.post("/login", postUser);

module.exports = router;