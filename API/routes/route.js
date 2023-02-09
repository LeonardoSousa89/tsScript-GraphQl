"use strict";
var express_1 = require("express");
var controller_1 = require("../controller/controller");
var server = (0, express_1.Router)();
server.route('/frase').get(function (req, res) {
    (0, controller_1.obterFraseController)(req, res);
}).post(function (req, res) {
    (0, controller_1.inserirFraseController)(req.body, res);
});
server.route('/frase/:id').get(function (req, res) {
    (0, controller_1.obterFrasePorIdController)(req.params, res);
})["delete"](function (req, res) {
    (0, controller_1.deletarFrasePorIdController)(req.params, res);
}).put(function (req, res) { return [
    (0, controller_1.atualizarFraseController)(req, res)
]; });
module.exports = server;
