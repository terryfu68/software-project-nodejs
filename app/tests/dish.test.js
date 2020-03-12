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
});