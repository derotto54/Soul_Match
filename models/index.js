const User = require('./User');
const Category= require('./Category');
const Hobby= require('./Hobby');
const UserHobby= require('./UserHobby')

Hobby.belongsTo(Category,{
    foreignKey:'category_id',
  })

Category.hasMany(Hobby,{
    foreignKey:'category_id',
    onDelete: 'CASCADE',
})

User.belongsToMany(Hobby, { through: UserHobby})
Hobby.belongsToMany(User, { through: UserHobby})

module.exports = { User, Category, Hobby, UserHobby };


