const chai = require("chai");
const expect = chai.expect;
const request = require("request-promise");

const api = `${require("../../config/env/test").api}/auth`;
const apiCustomer = `${require("../../config/env/test").api}/customer`;

describe("Auth", function () {
    this.slow(200);

    const bodyDefaultUser = {
        firstName: "Unit",
        lastName: "Test",
        address: "Santa Claus",
        city: "North Pole",
        postalCode: "H0H0H0",
        phoneNumber: 4163211234,
        email: "test@claus.ca",
        password: "claus123"
    }

    before(async () => {
        // Try to login with the user
        const response = await request({
            uri: `${api}/login`,
            resolveWithFullResponse: true,
            json: true,
            method: "POST",
            body: {
                email: bodyDefaultUser.email,
                password: bodyDefaultUser.password
            }
        }).catch(err => {});
        if (response) {
            // Send a request to delete the user
            await request({
                uri: `${apiCustomer}/${response.body.customer._id}`,
                resolveWithFullResponse: true,
                json: true,
                method: "DELETE",
            }).catch(err => {
                // Return doing nothing
                console.log(err);
                return;
            });
        }
    });

    describe("Sign Up", function () {
        it("should return error message on empty fields", async () => {
            const response = await request({
                uri: `${api}/signup`,
                resolveWithFullResponse: true,
                json: true,
                method: "POST"
            }).catch(err => {
                expect(err.response.statusCode).to.be.equal(422);
                expect(err.error).to.be.an('array').and.have.lengthOf(5);
                expect(err.error).to.deep.include({
                    email: 'Email cannot be empty'
                });
                expect(err.error).to.deep.include({
                    password: 'Must be at least 3 and max 10 in length'
                });
                expect(err.error).to.deep.include({
                    firstName: 'Must be at least 3 in length'
                });
                expect(err.error).to.deep.include({
                    lastName: 'Must be at least 3 in length'
                });
                expect(err.error).to.deep.include({
                    phoneNumber: 'Must be at least 11 in length'
                });
            });
            expect(response).to.be.undefined;
        });

        it("should return error message on invalid email field", async () => {
            const body = {
                email: "a",
                phoneNumber: "4163211234",
                firstName: "Test",
                lastName: "Test",
                password: "123"
            };
            const expectedMessage = `customer validation failed: email: Please fill a valid email address`;
            const response = await request({
                uri: `${api}/signup`,
                resolveWithFullResponse: true,
                json: true,
                method: "POST",
                body: body
            }).catch(err => {
                expect(err.response.statusCode).to.be.equal(500);
                expect(err.error).to.be.equal(expectedMessage);
            });
            expect(response).to.be.undefined;
        })

        it("should return error message on invalid phoneNumber field", async () => {
            const body = {
                email: "a@a.com",
                phoneNumber: "aaaaaaaaaaaaa",
                firstName: "Test",
                lastName: "Test",
                password: "123"
            };
            const expectedMessage = `customer validation failed: phoneNumber: ` +
                `Cast to Number failed for value "${body.phoneNumber}" at path "phoneNumber"`;
            const response = await request({
                uri: `${api}/signup`,
                resolveWithFullResponse: true,
                json: true,
                method: "POST",
                body: body
            }).catch(err => {
                expect(err.response.statusCode).to.be.equal(500);
                expect(err.error).to.be.equal(expectedMessage);
            });
            expect(response).to.be.undefined;
        });

        it("should include the default user sucessfully", async () => {
            const response = await request({
                uri: `${api}/signup`,
                resolveWithFullResponse: true,
                json: true,
                method: "POST",
                body: bodyDefaultUser
            });
            expect(response.statusCode).to.be.equal(200);
            //expect(response.body).to.deep.include(bodyDefaultUser);
        });
    });
});