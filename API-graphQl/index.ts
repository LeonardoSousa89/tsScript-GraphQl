//https://graphql.org/

import { gql, ApolloServer } from 'apollo-server'

const resolvers={
    Query: {
        hello(){

            return 'world'
        
        }
    }
}

const typeDefs=gql`

    type Query {
        hello: String
    }

`

const server=new ApolloServer({

    typeDefs,
    resolvers

})

server.listen()