const faker = require("faker");
const randomCard = faker.helpers.userCard();

console.log (randomCard);

const users = [];

for (var i = 0; i < 10; i++) {
    const fakee = {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthday: faker.date.past(),
    };

    users.push (fakee)
}
console.log (users);

