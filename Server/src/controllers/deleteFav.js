const { Favorite } = require('../db');

module.exports = async(req, res) => {
    try {
        const { id } = req.params;
        
        await Favorite.destroy({where: {id}})
        const favorites = await Favorite.findAll();
       
        return res.json(favorites);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}