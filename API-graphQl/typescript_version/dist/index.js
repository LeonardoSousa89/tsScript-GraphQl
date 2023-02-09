"use strict";
//https://graphql.org/
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers = {
    Query: {
        hello() {
            return 'world';
        }
    }
};
const typeDefs = (0, apollo_server_1.gql) `

    type Query {
        hello: string
    }

`;
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers
});
server.listen();
