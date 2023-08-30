import db from "../db.js"
import bcrypt from 'bcrypt'

export const registerUser = (req, res) => {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body[0].password, salt);
    const values = [
        req.body[0].name,
        req.body[0].user,
        hash,
        req.body[0].email
    ]
    const q = 'INSERT INTO users (name, user, password, email) VALUES (?)'

    db.query(q, [values], (err, data) => {
        if(err) throw res.status(500).json(err)
        res.status(200).json("user created")
    })
    
}