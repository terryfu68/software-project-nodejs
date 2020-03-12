const chai = require('chai');
const expect = chai.expect;
const request = require('request-promise');

const api = `${require('../../config/env/test').api}/partner`;

describe("Partner", function () {
    describe("Find all by city", function () {
        it("should return all partners by city", async () => {
            const response = await request({
                uri: `${api}/city/Toronto`,
                resolveWithFullResponse: true,
                json: true
            });
            expect(response.body).to.be.a('array').and.not.null;
        });
    });
});