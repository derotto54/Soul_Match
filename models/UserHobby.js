const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserHobby extends Model { }

UserHobby.init({},
  {
    sequelize,
    timestamps: false,
  }
)

module.exports = UserHobby