"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var db = require("knex");
dotenv.config();
var knex = db({
    client: process.env.CLIENT,
    connection: {
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD
    },
    pool: {
        min: 2,
        max: 10
    }
});
exports["default"] = knex;
