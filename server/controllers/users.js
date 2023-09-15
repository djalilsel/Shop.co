import { nanoid } from "nanoid"
import db from "../db.js"

const fetchCart = (req, res, cartId) => {
    const q = "SELECT * FROM shopping_cart_item WHERE cart_id = ?"
    let data = []
    db.query(q, [cartId], (err, dataa) => {
        if(err) throw err
        return res.json(data)
    })

}

export const getUser = (req, res) => {

    const { userId } = req.params

    const q = "SELECT (id), (name) FROM users WHERE id = ?"
    db.query(q, userId, (err, data) => {
        if(err) throw res.status(500).json(err)
        if(data.length === 0) return res.status(404).json(`No user with id: ${userId}`)
        return res.status(200).json(data)
    })
}

export const getCart = (req, res) => {
    
    const { userId } = req.params
    const q = "SELECT id FROM shopping_cart WHERE user_id = ?"

    db.query(q, userId, (err, data) => {
        if(err) throw res.status(500).json(err)
        if(data.length === 0) return res.status(404).json(`No cart for user with id: ${userId}`)
        
        const qq = "SELECT product_item_id, qty FROM shopping_cart_item WHERE cart_id = ?"

        db.query(qq, data[0].id, (err, dataa) => {
            if(err) throw res.status(500).json(err)
            return res.status(200).json(dataa)
        })
    })
}

export const addCartItem = (req, res) => {
    
    const { userId, productId, qty } = req.body

    const id = nanoid()
    const q = "SELECT shopping_cart.id AS cart_id, product_item.id AS prod_item_id FROM shopping_cart JOIN product_item WHERE shopping_cart.user_id = ? AND product_item.product_id = ?"        
        
    db.query(q, [userId, productId], (err, dataa) => {
        if(err) return res.status(500).json(err)
        if(dataa.length === 0) return res.status(404).json("no data")

        const q = "SELECT * FROM shopping_cart_item WHERE cart_id = ? AND product_item_id = ?"

        db.query(q, [dataa[0].cart_id, dataa[0].prod_item_id], (err, data) => {
            if(err) return res.status(500).json(err)
            if(data.length === 0 ){
                const q = "INSERT INTO shopping_cart_item VALUES (?, ?, ?, ?)"

                db.query(q, [id, dataa[0].cart_id, dataa[0].prod_item_id, qty], (err, data) => {
                    if(err) return res.status(500).json(err)
                    const q = "SELECT product_item.product_id, product_item.price, shopping_cart_item.qty, product.product_image, product.name FROM shopping_cart_item JOIN product_item ON shopping_cart_item.product_item_id = product_item.id JOIN product ON product.id = product_item.product_id WHERE cart_id = ?"

                    db.query(q, [dataa[0].cart_id], (err, dataaa) => {
                        if(err) return err
                        return res.status(200).json(dataaa)
                    })
                })
            } else{ 
                res.status(303).json("item already in cart")
            }
        })
    })

}

export const deleteCartItem = (req, res) => {
    
    const { userId, productId } = req.body
    const q = "SELECT shopping_cart.id AS cart_id, product_item.id AS prod_item_id FROM shopping_cart JOIN product_item WHERE shopping_cart.user_id = ? AND product_item.product_id = ?"
        
        db.query(q, [userId, productId], (err, dataa) => {
            if(err) return res.status(500).json(err)
            if(dataa.length === 0) return res.status(404).json("no data")

            const q = "SELECT * FROM shopping_cart_item WHERE cart_id = ? AND product_item_id = ?"

            db.query(q, [dataa[0].cart_id, dataa[0].prod_item_id], (err, data) => {
                if(err) return res.status(500).json(err)
                if(data.length === 0 ){
                    res.status(303).json("this item isn't in cart")
                }else{
                    const q = "DELETE FROM shopping_cart_item WHERE cart_id = ? AND product_item_id = ?"

                    db.query(q, [dataa[0].cart_id, dataa[0].prod_item_id], (err, data) => {
                        if(err) return res.status(500).json(err)

                        const q = "SELECT product_item.product_id, product_item.price, shopping_cart_item.qty, product.product_image, product.name FROM shopping_cart_item JOIN product_item ON shopping_cart_item.product_item_id = product_item.id JOIN product ON product.id = product_item.product_id WHERE cart_id = ?"

                        db.query(q, [dataa[0].cart_id], (err, dataaa) => {
                            if(err) return err
                            return res.status(200).json(dataaa)
                        })
                    })
                    
                }
            })
            
        })
}

export const updateQuantity = (req, res) => {
    const { userId, productId, qty, add } = req.body
    const q = "SELECT shopping_cart.id AS cart_id, product_item.id AS prod_item_id FROM shopping_cart JOIN product_item WHERE shopping_cart.user_id = ? AND product_item.product_id = ?"
        
    db.query(q, [userId, productId], (err, dataa) => {
        if(err) return res.status(500).json(err)
        if(dataa.length === 0) return res.status(404).json("no data")

        const q = "SELECT * FROM shopping_cart_item WHERE cart_id = ? AND product_item_id = ?"

        db.query(q, [dataa[0].cart_id, dataa[0].prod_item_id], (err, data) => {
            if(err) return res.status(500).json(err)
            if(data.length === 0 ){
                res.status(303).json("this item isn't in cart")
            }else{
                let q
                if(qty - 1 === 0 && !add){
                    q = "DELETE FROM shopping_cart_item WHERE cart_id = ? AND product_item_id = ?"
                    db.query(q, [dataa[0].cart_id, dataa[0].prod_item_id], (err, data) => {
                        if(err) return res.status(500).json(err)
                        
                        const q = "SELECT product_item.product_id, product_item.price, shopping_cart_item.qty, product.product_image, product.name FROM shopping_cart_item JOIN product_item ON shopping_cart_item.product_item_id = product_item.id JOIN product ON product.id = product_item.product_id WHERE cart_id = ?"

                        db.query(q, [dataa[0].cart_id], (err, dataaa) => {
                            if(err) return err
                            return res.status(200).json(dataaa)
                        })
                    })
                } else{
                    q = "UPDATE shopping_cart_item SET qty = ? WHERE cart_id = ? AND product_item_id = ?"
                    db.query(q, [add ? qty + 1 : qty - 1, dataa[0].cart_id, dataa[0].prod_item_id], (err, data) => {
                        if(err) return res.status(500).json(err)
                        
                        const q = "SELECT product_item.product_id, product_item.price, shopping_cart_item.qty, product.product_image, product.name FROM shopping_cart_item JOIN product_item ON shopping_cart_item.product_item_id = product_item.id JOIN product ON product.id = product_item.product_id WHERE cart_id = ?"

                        db.query(q, [dataa[0].cart_id], (err, dataaa) => {
                            if(err) return err
                            return res.status(200).json(dataaa)
                        })
                    })
                }

                
                
            }
        })
        
    })
}