const { gql, ApolloServer }=require('apollo-server') 
const knex=require('./db')

const typeDefs=gql`

    type Frases {
        id: Int
        frase_do_usuario: String
    }

    input FrasesInput {
        frase_do_usuario: String
    }

    type Query {
        frases: [Frases]
    }

    type Mutation {
        setFrase(data: FrasesInput): Frases
    }

`

const resolvers={
    Query: {
        //assim: 
        // frases: async () => await knex.select('*').from('frases')

        //ou assim:
        frases: async () => await knex('frases')
    },

    Mutation: {
        setFrase: async (_, { data }) => await(await knex.from('frases').insert(data).returning('*'))[0],
    }
}

const server=new ApolloServer({

    typeDefs,
    resolvers

})

server.listen().then(response=>console.log(response.url))