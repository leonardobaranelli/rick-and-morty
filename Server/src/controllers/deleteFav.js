const { User } = require('../db');
const { _handleServerError, CustomError } = require('../helpers/_errorHandler');

module.exports = async (req, res) => {
  try {
    const { id, userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) {
      throw new CustomError('User not found', 404);
    }
    
    const result = await user.removeFavorites(id);

    if (result === 0) {     
      throw new CustomError('Favorite not found for deletion.', 404);
    }

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
