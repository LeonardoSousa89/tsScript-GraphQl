"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../../repository/db"));
exports.default = {
    Query: {
        frases: () => __awaiter(void 0, void 0, void 0, function* () { return yield (0, db_1.default)('frases'); }),
    },
    Mutation: {
        /* Obrigatório o desestructuring e o retorno do primeiro,
        indíce pois a mutation retorna um elemento do tipo Frases **/
        setFrase: (_, { data }) => __awaiter(void 0, void 0, void 0, function* () { return yield (yield db_1.default.from('frases').insert(data).returning('*'))[0]; }),
        delFrase: (_, { filtro }) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, db_1.default)('frases').where({ id: filtro.id }).delete(); })
    },
};
