const knex=require('knex')
const dotenv=require('dotenv')  

dotenv.config()

module.exports=knex({
    
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


