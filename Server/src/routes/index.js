const router = require("express").Router();

const getCharById  = require('../controllers/getCharById')
const getLogin = require("../controllers/getLogin");
const postAccount = require("../controllers/postAccount");
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');


router.get("/character/:id", getCharById);
router.get("/auth", getLogin);
router.post("/auth", postAccount);
router.delete('/fav/:id', deleteFav);
router.post('/fav', postFav);

module.exports = router;