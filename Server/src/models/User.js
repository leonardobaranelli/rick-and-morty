const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Invalid email address', 
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: false });

  User.associate = (models) => {
    User.belongsToMany(models.Favorite, { through: 'user_favorite' });
  };
  
  User.prototype.addFavorite = async function (favorite) {    
    const existingAssociation = await this.hasFavorite(favorite);
    
    if (!existingAssociation) {      
      await this.addFavorites(favorite);
    }
  };  

  User.prototype.deleteFavorite = async function (favorite) {    
    const existingAssociation = await this.hasFavorite(favorite);
    
    if (existingAssociation) {      
      await this.removeFavorites(favorite);
    }
  };  

  return User;
};
