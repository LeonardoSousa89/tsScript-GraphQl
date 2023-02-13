"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./graphql/index"));
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const server = new server_1.ApolloServer(Object.assign({}, index_1.default));
const httpApolloServer = (0, standalone_1.startStandaloneServer)(server);
httpApolloServer.then(res => console.log(res));
