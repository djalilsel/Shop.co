const Chance = require('chance')
var chance = Chance()
const db = require('./db.js')
const moment = require('moment')

// for(let i = 0; i < 549; i++){
    // let randNumb = Math.floor(Math.random() * 3 + 1)
    // let colores = []
    // const sizesArr = ["Small", "Medium", "Large", "X-Large"]

    // const name = chance.paragraph({ sentences: 1 })
    // const stars = chance.floating({ min: 1, max:5, fixed: 1})
    // const price = chance.floating({ min: 100, max: 9999, fixed: 2 });
    // const discount = chance.natural({ min: 0, max: 50 })
    // const description = chance.paragraph({ sentences: 3 });
    // for(let j = 0; j < randNumb; j++){
    //     colores[j] = chance.color({format: 'hex'})
    // }
    // const sizes = JSON.stringify(chance.pickset(sizesArr, 3))
    // const instock = chance.natural({ min: 0, max: 1000 })
    // const colors = JSON.stringify(colores)
    let date = chance.date({ year: 2022 })
    date = moment(date).format();
    date = date.split("T")[0] + " " + date.split("T")[1].split("+")[0]
    // const values = [
    //     name,
    //     price,
    //     stars,
    //     discount,
    //     description,
    //     colors,
    //     sizes,
    //     instock
    // ]
    
    // const q = 'INSERT INTO stock (name, price, stars, discount, description, colors, sizes, instock) value(?, ?, ?, ?, ?, ?, ?, ?)'
    const q = 'UPDATE products SET date = ? WHERE id = ? '
    
    db.query(q, [date, 549], (err, data) => {
        if(err) console.log(err);
        console.log("done")
    })
// }

// const insertQuery = 'INSERT INTO products (category, name, current_price, raw_price, discount, variation_0_color, variation_1_color, variation_0_thumbnail, variation_0_image, variation_1_thumbnail, variation_1_image, image_url, model) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';