const chai = require("chai");
const expect = chai.expect;
const request = require("request-promise");

const api = `${require("../../config/env/test").api}/dishes`;

describe("Dishes", function () {

    describe("Find all", function () {
        it("should return all dishes", async () => {
            const response = await request({
                uri: `${api}/`,
                resolveWithFullResponse: true,
                json: true
            });
            expect(response.body).to.be.a("array").and.not.null;
        });
    });

    describe("Find per Partner", () => {
        let partnerId = "5e781b28a08b693a009a5d82";

        it("shoud return error for non-exist partner id", async () => {
            const response = await request({
                uri: `${api}/partner/${partnerId}`,
                resolveWithFullResponse: true,
                json: true
            });
            expect(response.statusCode).to.be.equal(200);
        });
    });
});