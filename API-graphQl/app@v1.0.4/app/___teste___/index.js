const { gql, ApolloServer }=require('apollo-server') 
const knex=require('./db')

const typeDefs=gql`

    type Frases {
        id: Int
        frase_do_usuario: String
    }

    type Query {
        frases: [Frases]
    }



`

const resolvers={
    Query: {
        //assim: 
        // frases: async () => await knex.select('*').from('frases')

        //ou assim:
        frases: async () => await knex('frases')
    }
}

const server=new ApolloServer({

    typeDefs,
    resolvers

})

server.listen()