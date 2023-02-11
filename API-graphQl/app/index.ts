//https://graphql.org/
//https://the-guild.dev/graphql/tools/docs/introduction
//https://the-guild.dev/graphql/tools/docs/schema-merging
//https://www.apollographql.com/docs/apollo-server/data/fetching-rest/

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