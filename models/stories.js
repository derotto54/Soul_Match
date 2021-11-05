const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Stories extends Model {
    
}
Stories.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id',
      },
    },
     myStory: {
      type:DataTypes.STRING,
      allowNull: false,
    },
     Information:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Stories',
  }
);

module.exports = Stories;