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

    after(async () => {
        await mongoose.disconnect();
    });
});