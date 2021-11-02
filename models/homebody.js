const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Homebody extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
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
    modelName: 'homebody',
  }
);

module.exports = Homebody;
