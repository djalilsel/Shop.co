import db from "../db.js"
export const getUser = (req, res) => {

    const { userId } = req.params

    const q = "SELECT (id), (name) FROM users WHERE id = ?"
    db.query(q, userId, (err, data) => {
        if(err) throw res.status(500).json(err)
        if(data.length === 0) return res.status(404).json(`No user with id: ${userId}`)
        return res.status(200).json(data)
    })
}