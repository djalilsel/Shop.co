import db from "../db.js"
import bcrypt from 'bcrypt'

export const registerUser = (req, res) => {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const values = [
        req.body.name,
        req.body.user,
        hash,
        req.body.email
    ]
    const qq = 'SELECT * FROM users WHERE name = ?'

    db.query(qq, req.body.name, (err, data) => {
        if(data.length > 0) return res.status(403).json("name already taken")

        const qqq = 'SELECT * FROM users WHERE email = ?'

        db.query(qqq, req.body.email, (err, data) => {
            if(err) throw res.status(500).json(err)
            if(data.length > 0) return res.status(403).json("Email already linked with an account, Try account recovery")

            const qqqq = 'SELECT * FROM users WHERE user = ?'
            
            db.query(qqqq, req.body.user, (err, data) => {
                if(err) throw res.status(500).json(err)
                if(data.length > 0) return res.status(403).json("User already taken")
                const q = 'INSERT INTO users (name, user, password, email) VALUES (?)'
            
            db.query(q, [values], (err, data) => {
                if(err) throw res.status(500).json(err)
                    res.status(200).json("user created")
                })
            })

        })

    })
    
}