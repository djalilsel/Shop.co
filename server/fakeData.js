import Chance from "chance"
let chance = Chance()
import db  from "./db.js"
import moment from "moment/moment.js"

// for(let i = 0; i < 549; i++){
    // let randNumb = Math.floor(Math.random() * 3 + 1)
    // let colores = []
    const sizesArr = ["Small", "Medium", "Large", "X-Large"]

    // const name = chance.paragraph({ sentences: 1 })
    const stars = chance.floating({ min: 1, max:5, fixed: 1})
    // const price = chance.floating({ min: 100, max: 9999, fixed: 2 });
    // const discount = chance.natural({ min: 0, max: 50 })
    // const description = chance.paragraph({ sentences: 3 });
    // for(let j = 0; j < randNumb; j++){
    //     colores[j] = chance.color({format: 'hex'})
    // }
    const sizes = chance.pickset(sizesArr, 3)
    // const instock = chance.natural({ min: 0, max: 1000 })
    // const colors = JSON.stringify(colores)
    let date = chance.date({ year: 2022 })
    date = moment(date).format();
    date = date.split("T")[0] + " " + date.split("T")[1].split("+")[0]
    const values = [
        "men",
        "One Life Graphic T-shirt",
        180,
        300,
        40,
        "#4F4631",
        "#314F4A",
        "#31344F",
        "https://i.pinimg.com/564x/19/33/95/193395e4e40372bea8a517ecc2442487.jpg",
        "https://i.pinimg.com/564x/ed/5f/34/ed5f34ce51ae6935a9d6c363bfab0dab.jpg",
        "https://i.pinimg.com/564x/ac/b7/99/acb799092c2db569ec8c4854c7c14b78.jpg",
        sizes[0],
        sizes[1],
        sizes[2],
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        stars,
        date,
    ]
    
    // const q = 'INSERT INTO stock (name, price, stars, discount, description, colors, sizes, instock) value(?, ?, ?, ?, ?, ?, ?, ?)'
    const q = 'INSERT INTO products (category, name, current_price, raw_price, discount, color_0, color_1, color_2, main_image, color_1_image, color_2_image, size_0, size_1, size_2, description, stars, date) value(?)'
    // const q = 'UPDATE products SET date = ? WHERE id = ? '
    
    db.query(q, [values], (err, data) => {
        if(err) console.log(err);
        console.log("done")
    })
// }

// const insertQuery = 'INSERT INTO products (category, name, current_price, raw_price, discount, variation_0_color, variation_1_color, variation_0_thumbnail, variation_0_image, variation_1_thumbnail, variation_1_image, image_url, model) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';