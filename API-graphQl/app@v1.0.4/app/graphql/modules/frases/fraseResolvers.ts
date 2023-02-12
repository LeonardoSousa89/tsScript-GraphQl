import knex from '../../../repository/db'

export default {

    Query: {

        frases: async () => await knex('frases'),
    
    },

}
