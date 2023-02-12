import knex from 'knex'
import * as dotenv from 'dotenv' 

dotenv.config()

export default knex.default({

    client: process.env.CLIENT,
    connection: {
        database: process.env.DATABASE,
        user:     process.env.USER,
        password: process.env.PASSWORD
    },
    pool: {
        min: 2,
        max: 10
    }

})

