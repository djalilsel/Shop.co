import db from "../db.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import { nanoid } from "nanoid"

dotenv.config({ path: './.env' })

const maxAge = 3 * 24 * 60 * 60

const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
}
const createCart = (user_id) => {
    const id = nanoid()
    const q = `INSERT INTO shopping_cart VALUES ('${id}', '${user_id}')`
    db.query(q, (err, data) => {
        if(err) return console.log(err)
    })
}

export const signupUser = (req, res) => {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const id = nanoid()
    const values = [
        id,
        req.body.name,
        req.body.user,
        hash,
        req.body.email
    ]
    const qq = 'SELECT * FROM site_user WHERE name = ?'

    db.query(qq, req.body.name, (err, data) => {
        if(data.length > 0) return res.status(403).json("name already taken")

        const qqq = 'SELECT * FROM site_user WHERE email_address = ?'

        db.query(qqq, req.body.email, (err, data) => {
            if(err) throw res.status(500).json(err)
            if(data.length > 0) return res.status(403).json("Email already linked with an account, Try account recovery")

            const qqqq = 'SELECT * FROM site_user WHERE user = ?'
            
            db.query(qqqq, req.body.user, (err, data) => {
                if(err) throw res.status(500).json(err)
                if(data.length > 0) return res.status(403).json("User already taken")

                const q = 'INSERT INTO site_user (id, name, user, password, email_address) VALUES (?)'
        
                db.query(q, [values], (err, data) => {
                    if(err) throw res.status(500).json(err)
                    const token = createToken(id)
                    createCart(id)
                    res.cookie('jwt', token, { maxAge: maxAge * 1000 }).status(200).json({msg: "user created", user: [{
                        id: id,
                        name: req.body.name
                    }]})
                    })
                })

        })

    })
}

export const signinUser = (req, res) => {

    const q = "SELECT (password) FROM site_user WHERE user = ?"
    db.query(q, req.body.user, (err, data) => {
        if(err) throw res.status(500).json(err)
        if(data.length === 0) return res.status(404).json("Wrong user")
        bcrypt.compare(req.body.password, data[0].password, (err, result) => {
            if(result){
                const qq = "SELECT (id), (name) FROM site_user WHERE user = ?"
                db.query(qq, [req.body.user], (err, data) => {
                    if(err) throw res.status(500).json(err)
                    const token = createToken(data[0].id)
                    res.cookie('jwt', token, { maxAge: maxAge * 1000}).json(data)
                })
            } else{
                res.status(404).json("Wrong password")
            }
        })
    })
}

export const signoutUser = (req, res) => {
    res.status(200).cookie('jwt', '', { maxAge: 1 }).json("user signed out successfully")
}

