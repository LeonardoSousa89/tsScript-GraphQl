"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = require("express");
const controller_1 = require("../controller/controller");
const server = (0, express_1.Router)();
exports.server = server;
server.route('/frase').get((req, res) => {
    (0, controller_1.obterFraseController)(req, res);
}).post((req, res) => {
    (0, controller_1.inserirFraseController)(req.body, res);
});
server.route('/frase/:id').get((req, res) => {
    (0, controller_1.obterFrasePorIdController)(req.params, res);
}).delete((req, res) => {
    (0, controller_1.deletarFrasePorIdController)(req.params, res);
}).put((req, res) => [
    (0, controller_1.atualizarFraseController)(req, res)
]);
