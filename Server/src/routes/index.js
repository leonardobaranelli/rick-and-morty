const router = require("express").Router();

const getCharById  = require('../controllers/getCharById')
const getLogin = require("../controllers/getLogin");
const postUser = require("../controllers/postUser");
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');


router.get("/character/:id", getCharById);
router.get("/login", getLogin);
router.post("/login", postUser);
router.delete('/fav/:id', deleteFav);
router.post('/fav', postFav);

module.exports = router;