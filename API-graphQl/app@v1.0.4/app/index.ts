import graphQl from './graphql/index'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';

const server=new ApolloServer({
    ...graphQl
});


const httpApolloServer=startStandaloneServer(server);

httpApolloServer.then(res=>console.log(res))

