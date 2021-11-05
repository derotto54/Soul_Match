const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class DealBreaker extends Model {
    
}
DealBreaker.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id',
      },
    },
    wantKids: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    kidCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    religion: {
      type: DataTypes. INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dealbreaker',
  }
);

module.exports = DealBreaker;