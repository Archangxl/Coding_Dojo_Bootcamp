const {faker} = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const createFakeUser = {
        _id: faker.database.mongodbObjectId(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return createFakeUser;
}
const makingCreateUser = createUser();

const createCompany = () => {
    const createFakeCompany = {
        _id: faker.database.mongodbObjectId(),
        companyName: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return createFakeCompany;
}
const makingCreateCompany = createCompany();

app.get("/api/users/new", (req, res) => {
    res.json({ makingCreateUser });
});

app.get("/api/company/new", (req, res) => {
    res.json({makingCreateCompany});
});

app.get("/api/user/company", (req, res) => {
    res.json({makingCreateCompany, makingCreateUser});
})

app.listen(port, ()=> console.log('Listening on port: ${port}'));