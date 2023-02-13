"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const merge_1 = require("@graphql-tools/merge");
const load_files_1 = require("@graphql-tools/load-files");
const typeDefsPath = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, 'modules', '**', '*.gql'));
const fraseResolvers_1 = __importDefault(require("./modules/frases/fraseResolvers"));
const typeDefs = (0, merge_1.mergeTypeDefs)(typeDefsPath);
const resolvers = (0, merge_1.mergeResolvers)(fraseResolvers_1.default);
exports.default = { typeDefs, resolvers };
