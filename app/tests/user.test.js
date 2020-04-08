const chai = require("chai");
const expect = chai.expect;
const request = require("request-promise");

const api = `${require("../../config/env/test").api}/user`;

describe("User", function () {

    describe("Find all Users", function () {
        it("should return all users", async () => {
            const response = await request({
                uri: `${api}/`,
                resolveWithFullResponse: true,
                json: true
            });
            expect(response.body).to.be.a("array").and.not.null;
        });
    });

    describe("Find User by UserId", () => {
        let userId = "5e8cf9613fca6b0f98574883";

        it("shoud return error for non-exist user id", async () => {
            const response = await request({
                uri: `${api}/${userId}`,
                resolveWithFullResponse: true,
                json: true
            });
            expect(response.statusCode).to.be.equal(200);
        });
    });


    describe("Create User", function () {
        it("should create a new user", async () => {
            const response = await request({
                uri: `${api}/add`,
                resolveWithFullResponse: true,
                json: true,
                method: "POST",
                body: {
                    firstName: "Terry",
                    lastName: "Fu",
                    address: "168 Nime Ave",
                    city: "Toronto",
                    postalCode: "L6C 868",
                    phoneNumber: 1234567890,
                    email: "terry@gmail.com",
                    password: "!666888!",
                }
            });
            expect(response.statusCode).to.be.equal(200);

        });
    });

});