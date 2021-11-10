const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserLike extends Model { }

UserLike.init(
  { },
  {
    sequelize,
    timestamps: false,
  }
)

module.exports = UserLike