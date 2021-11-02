const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Homebody extends Model {
  
}

Homebody.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id',
      },
    },
    binge: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cook: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    diy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    garden: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
  },
  {
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'homebody',
  }
);

module.exports = Homebody;
