const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Art extends Model {
  
}

Art.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id',
      },
    },
    museum: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    musicals: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    concert: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    movie: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    book: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
  },
  {
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'art',
  }
);

module.exports = Art;
