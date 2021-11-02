const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');



class Homebody extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
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
    hooks: {
    beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'extrovert',
  }
);

module.exports = Extrovert;
