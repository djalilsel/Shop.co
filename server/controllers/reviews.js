import db from "../db.js"

export const getHappyReviews = (req, res) => {
     
    const q = 'SELECT * FROM happy_customers'

    db.query(q, (err, data) => {
        if(err) throw res.status(500).json(err)
        if(data.length === 0) return res.status(404).json("no happy customers")
        return res.status(200).json(data)
    })
}