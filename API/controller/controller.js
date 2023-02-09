"use strict";
exports.__esModule = true;
exports.deletarFrasePorIdController = exports.obterFrasePorIdController = exports.atualizarFraseController = exports.obterFraseController = exports.inserirFraseController = void 0;
var service_1 = require("../services/service");
function inserirFraseController(req, res) {
    return (0, service_1.inserirFraseService)(req, res);
}
exports.inserirFraseController = inserirFraseController;
function atualizarFraseController(req, res) {
    return (0, service_1.atualizarFraseService)(req, res);
}
exports.atualizarFraseController = atualizarFraseController;
function obterFraseController(req, res) {
    return (0, service_1.obterFraseService)(req, res);
}
exports.obterFraseController = obterFraseController;
function obterFrasePorIdController(req, res) {
    return (0, service_1.obterFrasePorIdService)(req, res);
}
exports.obterFrasePorIdController = obterFrasePorIdController;
function deletarFrasePorIdController(req, res) {
    return (0, service_1.deletarFrasePorIdService)(req, res);
}
exports.deletarFrasePorIdController = deletarFrasePorIdController;
