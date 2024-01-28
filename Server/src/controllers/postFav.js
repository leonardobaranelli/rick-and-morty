const { Favorite, User } = require('../db');
const { _handleServerError, CustomError } = require('../helpers/_errorHandler');

module.exports = async (req, res) => {
  try {    
    const { id, name, status, species, gender, origin, image, userId } = req.body;
    
    const [favorite, created] = await Favorite.findOrCreate({
      where: { id },
      defaults: { name, status, species, gender, origin, image },
    });

    const user = await User.findByPk(userId);
    
    if (created) await user.addFavorite(favorite);      
    
    const allFavorites = await user.getFavorites(); 
    
    return res.json(allFavorites);
  } catch (error) {
    if (error instanceof CustomError) {
      _handleServerError(res, error);
    } else {
      _handleServerError(res, new CustomError('Internal Server Error', 500));
    }
  }
};
