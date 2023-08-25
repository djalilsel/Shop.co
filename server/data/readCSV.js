const fs = require('fs');
const { parse } = require('csv-parse');
const Chance = require('chance')
var chance = Chance()
const db = require('../db.js')

let validRowCount = 0;
const maxValidRows = 100;
let continueProcessing = true;
let newData = [];

fs.createReadStream("./shoes.csv")
  .pipe(parse({ delimiter: ",", from_line: 300 }))
  .on("data", function (row) {
    if (!continueProcessing) {
        return;
    }
  
    if (validRowCount >= maxValidRows) {
        continueProcessing = false;
        return;
    }

    if (row[10] != '' && row[11] != '') {
        newData.push(row);
        validRowCount++;
    }
})
.on("end", function () {

    console.log("end");
    console.log(newData);
    const selectedColumns = newData.map(([category, , name, current_price, raw_price, , discount, , , , , , variation_0_color, variation_1_color, variation_0_thumbnail, variation_0_image, variation_1_thumbnail, variation_1_image, image_url, , , model]) => {
        return [category, name, current_price, raw_price, discount, variation_0_color, variation_1_color, variation_0_thumbnail, variation_0_image, variation_1_thumbnail, variation_1_image, image_url, model];
      });
    console.log(selectedColumns);
    for (const row of selectedColumns) {
        const [category, name, current_price, raw_price, discount, variation_0_color, variation_1_color, variation_0_thumbnail, variation_0_image, variation_1_thumbnail, variation_1_image, image_url, model] = row;
        const description = chance.paragraph({ sentences: 3 });
        const stars = chance.floating({ min: 1, max:5, fixed: 1})

        const values = [
          category,
          name,
          current_price,
          raw_price,
          discount,
          variation_0_color,
          variation_1_color,
          variation_0_thumbnail,
          variation_0_image,
          variation_1_thumbnail,
          variation_1_image,
          image_url,
          model,
          stars,
          description
        ];
        
        const q = 'INSERT INTO products (category, name, current_price, raw_price, discount, variation_0_color, variation_1_color, variation_0_thumbnail, variation_0_image, variation_1_thumbnail, variation_1_image, image_url, model, stars, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      
        db.query(q, values, (err, data) => {
          if (err) console.log(err);
          console.log("done");
        });
    }
    
})
.on("error", function (error) {
    console.log(error.message);
});