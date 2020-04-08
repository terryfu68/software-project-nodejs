const chai = require("chai");
const expect = chai.expect;
const request = require("request-promise");

const DishAvailabilityDao = require("../services/dishavailability-dao");

const apiAuth = `${require("../../config/env/test").api}/auth`;
const api = `${require("../../config/env/test").api}`;

require("../modules/database")(true); // Insert the default data into the database
const mongoose = require("mongoose");

describe("Order", function () {
    let loginToken = "";
    let customer;
    let dishAvail;

    before(async () => {
        // Try to login with the user
        const response = await request({
            uri: `${apiAuth}/login`,
            resolveWithFullResponse: true,
            json: true,
            method: "POST",
            body: {
                email: "test@claus.ca",
                password: "claus123"
            }
        }).catch(err => {
            console.log(err);
        });
        loginToken = response.body.token;
        customer = response.body.customer;
        let dishAvailAll = await DishAvailabilityDao.findAll();
        dishAvail = dishAvailAll[0];
    });

    describe("Create Order", function () {
        it("should create a new order", async () => {
            const response = await request({
                uri: `${api}/createOrder`,
                resolveWithFullResponse: true,
                json: true,
                method: "POST",
                body: {
                    status: 1,
                    customer: customer,
                    partner: dishAvail.dish.partner,
                    items: [{
                        quantity: 1,
                        dishAvailability: dishAvail
                    }]
                }
            });
            expect(response.statusCode).to.be.equal(200);

        });
    });


    describe("Find Orders by Partner", () => {
        let partnerId = "5e781b28a08b693a009a5d82";
        it("shoud return error for non-exist partner id", async () => {
            const response = await request({
                uri: `${api}/ordersByPartner/${partnerId}`,
                resolveWithFullResponse: true,
                json: true
            });
            expect(response.statusCode).to.be.equal(200);
        });
    });


    describe("Find History Orders by Partner", () => {
        let partnerId = "5e781b28a08b693a009a5d82";
        let status = 1;
        it("shoud return error for non-exist partner id", async () => {
            const response = await request({
                uri: `${api}/orderHistoryByPartner/${partnerId}/${status}`,
                resolveWithFullResponse: true,
                json: true
            });
            expect(response.statusCode).to.be.equal(200);
        });
    });

    after(async () => {
        await mongoose.disconnect();
    });
});