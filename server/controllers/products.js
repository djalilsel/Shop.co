import { Chance } from 'chance'
const chance = Chance()
import db from '../db.js'

export const getNewArrivals = (req, res) => {
    
    const q = "SELECT (id), (name), (stars), (current_price), (discount), (image_url) FROM products ORDER BY date DESC LIMIT 4"

    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err)
        if(data.length === 0) return res.status(404).json("No products")
        res.status(200).json(data)
    })
}

export const getTopSelling = (req, res) => {

    let randNumb = []

    for(let j = 0; j < 4; j++){
        randNumb.push(chance.natural({ min: 1, max: 554 }))
    }

    const q = "SELECT (id), (name), (stars), (current_price), (discount), (image_url) FROM products ORDER BY RAND() LIMIT 4"

    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err)
        if(data.length === 0) return res.status(404).json("No products")
        res.status(200).json(data)
    })
}

export const getProduct = (req, res) => {
    
    const { productId }= req.params
    const q = "SELECT * FROM products WHERE id = ?"

    db.query(q, productId, (err, data) => {
        if(err) return res.status(500).json(err)
        if(data.length === 0) return res.status(404).json("product not found")
        return res.status(200).json(data)
    })
}