"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarFrasePorIdService = exports.obterFrasePorIdService = exports.obterFraseService = exports.atualizarFraseService = exports.inserirFraseService = void 0;
const knex = __importStar(require("../repository/db"));
function inserirFraseService(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const novaFrase = Object.assign({}, req);
        const response = yield knex.default
            .insert(novaFrase)
            .from('frases')
            .then(_ => res.status(201).json({ msg: 'frase inserida com sucesso' }))
            .catch(_ => res.status(400)
            .json({ msg: 'houve um erro ao inserir a frase' }));
        return response;
    });
}
exports.inserirFraseService = inserirFraseService;
function atualizarFraseService(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = Object.assign({}, req.body);
        const novaFrase = Object.assign({}, body);
        const id = Object.assign({}, req.params);
        const response = yield knex.default
            .update(novaFrase)
            .from('frases')
            .where(id)
            .then(_ => res.status(201).json({ msg: 'frase atualizada com sucesso' }))
            .catch(_ => res.status(400)
            .json({ msg: `houve um erro ao atualizar a frase` }));
        return response;
    });
}
exports.atualizarFraseService = atualizarFraseService;
function obterFraseService(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield knex.default
            .select()
            .from('frases')
            .then(frases => res.status(200).json(frases))
            .catch(_ => res.status(500)
            .json({ msg: 'ocorreu um erro com o servidor' }));
        return response;
    });
}
exports.obterFraseService = obterFraseService;
function obterFrasePorIdService(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield knex.default
            .select()
            .from('frases')
            .where(Object.assign({}, req))
            .then(frases => res.status(200).json(frases))
            .catch(_ => res.status(500)
            .json({ msg: 'ocorreu um erro com o servidor' }));
        return response;
    });
}
exports.obterFrasePorIdService = obterFrasePorIdService;
function deletarFrasePorIdService(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield knex.default
            .delete()
            .from('frases')
            .where(Object.assign({}, req))
            .then(_ => res.status(204).json(_))
            .catch(_ => res.status(500)
            .json({ msg: 'ocorreu um erro com o servidor' }));
        return response;
    });
}
exports.deletarFrasePorIdService = deletarFrasePorIdService;
