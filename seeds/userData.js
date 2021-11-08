const faker = require("faker");
// const { Hobby } = require("../models");

const users= [];

for (var i = 0; i < 100; i++) {  
    const fakee = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        image: faker.internet.avatar(),
        story:faker.lorem.paragraph()
    }
    users.push (fakee)
} 

module.exports = users