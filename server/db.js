import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.CON_USER,
    password: process.env.CON_PASS,
    database: process.env.DATABASE
})

db.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('success');
    }
})
export default db
