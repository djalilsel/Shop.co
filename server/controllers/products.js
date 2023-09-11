import { Chance } from 'chance'
const chance = Chance()
import db from '../db.js'
import moment from 'moment'

// const getCard = (number) => {
//     const q = "SELECT product.id, product.name, product.product_image, product_item.price FROM product JOIN product_item ON product.id = product_item.product_id ORDER BY RAND() LIMIT ?"
//     db.query(q, [number], (err, data) => {
//         if(err) throw res.status(500).json(err)
//         if(data.length === 0) return res.status(404).json("No products")
//         return data
//     })
// }

const getTime = () => {
    return moment().format("YYYY-MM-DD HH:mm:ss")
}

export const getNewArrivals = (req, res) => {

    const q = "SELECT product.id FROM product ORDER BY RAND() LIMIT 4"
    const time = getTime();
    db.query(q, (err, data) => {
        if(err) throw res.status(500).json(err)
        if(data.length === 0) return res.status(404).json("No products")
        let products = []
        const promises = []

        const qq = "SELECT * FROM promotion_product WHERE product_id = ?"
        
        for(let i = 0; i < data.length; i++){
            const promise = new Promise((resolve, reject) => {
                db.query(qq, data[i].id, (err, dataa) => {
                    if(err) reject(err)
                    if(dataa.length === 0) {
                        const qqq = "SELECT product.name, product.product_image, product_item.price FROM product JOIN product_item ON product.id = product_item.product_id WHERE product.id = ?"
                        db.query(qqq, data[i].id, (err, dataaa) => {
                            if(err) throw res.status(500).json(err)
                            resolve(dataaa[0]) 
                        })
                    } else {
                        const qqq = "SELECT product.name, product.product_image, product_item.price, discount_rate FROM product JOIN product_item ON product.id = product_item.product_id JOIN promotion_product ON product.id = promotion_product.product_id JOIN promotion ON promotion_product.promotion_id = promotion.id WHERE product.id = ? AND promotion.start_date < ? AND promotion.end_date > ?"
                        db.query(qqq, [data[i].id, time, time], (err, dataaaa) => {
                                if(err) throw res.status(500).json(err)
                                resolve(dataaaa[0]) 
                            })
                    }
                })
            })
            promises.push(promise)
        }
        Promise.all(promises)
            .then(result => {
                products.push(...result); 
                res.status(200).json(products)
            })
            .catch(error => {
                console.error("Error in one of the queries:", error);
                res.status(500).json(error);
            });
        })
}

export const getTopSelling = (req, res) => {

    const q = "SELECT product.id FROM product ORDER BY RAND() LIMIT 4"
    const time = getTime();
    db.query(q, (err, data) => {
        if(err) throw res.status(500).json(err)
        if(data.length === 0) return res.status(404).json("No products")
        let products = []
        const promises = []

        const qq = "SELECT * FROM promotion_product WHERE product_id = ?"
        
        for(let i = 0; i < data.length; i++){
            const promise = new Promise((resolve, reject) => {
                db.query(qq, data[i].id, (err, dataa) => {
                    if(err) reject(err)
                    if(dataa.length === 0) {
                        const qqq = "SELECT product.name, product.product_image, product_item.price FROM product JOIN product_item ON product.id = product_item.product_id WHERE product.id = ?"
                        db.query(qqq, data[i].id, (err, dataaa) => {
                            if(err) throw res.status(500).json(err)
                            resolve(dataaa[0]) 
                        })
                    } else {
                        const qqq = "SELECT product.name, product.product_image, product_item.price, discount_rate FROM product JOIN product_item ON product.id = product_item.product_id JOIN promotion_product ON product.id = promotion_product.product_id JOIN promotion ON promotion_product.promotion_id = promotion.id WHERE product.id = ? AND promotion.start_date < ? AND promotion.end_date > ?"
                        db.query(qqq, [data[i].id, time, time], (err, dataaaa) => {
                                if(err) throw res.status(500).json(err)
                                resolve(dataaaa[0]) 
                            })
                    }
                })
            })
            promises.push(promise)
        }
        Promise.all(promises)
            .then(result => {
                products.push(...result); 
                res.status(200).json(products)
            })
            .catch(error => {
                console.error("Error in one of the queries:", error);
                res.status(500).json(error);
            });
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