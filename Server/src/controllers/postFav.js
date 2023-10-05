const { Favorite } = require('../db');

module.exports = async(req, res) => {
  try {
    const {id, name, status, species, gender, origin, image} = req.body;
    
    await Favorite.findOrCreate({where: {id, name, status, species, gender, origin, image}});

    const allFavorites = await Favorite.findAll();
    return res.json(allFavorites);

  } catch (error) {

    return res.status(500).send(error.message)
  }
}