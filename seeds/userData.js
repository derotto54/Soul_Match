const faker = require("faker");
// const { Hobby } = require("../models");

const users= [];


function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (var i = 0; i < 20; i++) {
  const fakee = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    image: faker.internet.avatar(),
    story:faker.lorem.paragraph()

};

  users.push(fakee)
}



// console.log(users)
module.exports = users
