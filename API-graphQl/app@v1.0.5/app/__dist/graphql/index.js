"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const merge_1 = require("@graphql-tools/merge");
const load_files_1 = require("@graphql-tools/load-files");
const typePath = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, 'modules', '**', '*.gql'));
const resolversPath = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, 'modules', '**', 'fraseResolvers.ts'));
const typeDefs = (0, merge_1.mergeTypeDefs)(typePath);
const resolvers = (0, merge_1.mergeResolvers)(resolversPath);
exports.default = { typeDefs, resolvers };
