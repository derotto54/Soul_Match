const faker = require("faker");
// const { Hobby } = require("../models");

const users = [];

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < 10; i++) {
  const fakee = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    birthday: faker.date.past(),
    image: faker.internet.avatar(),
    relationshipStatus: getRandomInteger(1, 4),
    haveKids: getRandomInteger(1, 4),
    wantKids: getRandomInteger(1, 3),
    religion: getRandomInteger(1, 3),
    smoke: getRandomInteger(1, 3),
    drink: getRandomInteger(1, 3),
  };

  users.push(fakee)
}

//for (var i = 0; i < 10; i++) {  
//    const fakee = {
//        first_name: faker.name.firstName(),
//        last_name: faker.name.lastName(),
//        email: faker.internet.email(),
//        password: faker.internet.password(),
//        birthday: faker.date.past(),
//        image: faker.internet.avatar()
//    }
 //   users.push (fakee)
//} 

// console.log(users)
module.exports = users
