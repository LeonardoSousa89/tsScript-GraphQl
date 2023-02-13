import knex from '../../../repository/db'

export default {

    Query: {

        frases: async () => await knex('frases'),
    
    },
    Mutation: {
        /* Obrigatório o desestructuring e o retorno do primeiro, 
        indíce pois a mutation retorna um elemento do tipo Frases **/ 
        setFrase: async (_, { data }) => await(await knex.from('frases').insert(data).returning('*'))[0],
        
        delFrase: async (_, { filtro }) => await knex('frases').where({ id: filtro.id }).delete()
    },

}
