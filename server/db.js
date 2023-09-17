import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

const db2 = mysql.createConnection({
    host: "sql3.freemysqlhosting.net",
    user: "sql3646842",
    password: "73G7U2Ytfx",
    database: "sql3646842"
})

db2.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('success2');
    }
})

// const db = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.CON_USER,
//     password: process.env.CON_PASS,
//     database: process.env.DATABASE
// })

// db.connect((err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('success');
//     }
// })
export default db2

