import * as dotenv from 'dotenv'
import * as db from 'knex'

dotenv.config()

const knex=db({
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

export default knex



