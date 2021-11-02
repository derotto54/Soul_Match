const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Extrovert extends Model {
  
}

Extrovert.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id',
      },
    },
    coffee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    concerts: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bowl: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dance: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
  },
  {
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'extrovert',
  }
);

module.exports = Extrovert;
