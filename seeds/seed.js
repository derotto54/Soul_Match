const sequelize = require('../config/connection');
const { User, Category, Hobby, UserHobby } = require('../models');

const userData = require('./userData.js');
const categoriesWithHobbiesData = require('./categoriesWithHobbies')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Category.bulkCreate( categoriesWithHobbiesData, {
    include: [ Hobby ]
  })

  await User.bulkCreate(userData, {
    individualHooks: true
  });

  const hobbies = await Hobby.findAll()
  const allUsers = await User.findAll()
 
  for (userIndex in allUsers) {
    const user = allUsers[userIndex]
    const randomCounts =  Math.floor(Math.random()*5)+1
    console.log(randomCounts)
    for(i=0; i<randomCounts; i++) {
      const randomHobbyIndex = Math.floor(Math.random()*hobbies.length)
      await user.addHobby(hobbies[randomHobbyIndex])
    }
    
  }

  process.exit(0);
};

seedDatabase();
