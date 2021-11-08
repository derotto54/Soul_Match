const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserLike extends Model {}

UserLike.init(
  {
    user1Id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'user',
        key:'id'
      }
    },
    user2Id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'user',
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
  }
)

module.exports = UserLike