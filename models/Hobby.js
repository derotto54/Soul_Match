const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hobby extends Model{}
Hobby.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'hobby',
  }
)
module.exports = Hobby