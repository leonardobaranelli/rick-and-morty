const { Favorite } = require('../db');
const { _handleServerError, CustomError } = require('../helpers/_errorHandler');

module.exports = async(req, res) => {
    try {
        const { id } = req.params;
        
        await Favorite.destroy({where: {id}})
        const favorites = await Favorite.findAll();
       
        return res.json(favorites);
    } catch (error) {
        if (error instanceof CustomError) {
            _handleServerError(res, error);
        } else {
            _handleServerError(res, new CustomError('Internal Server Error', 500));
        }
    }
}