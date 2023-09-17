import fs from 'fs'
import {parse} from 'csv-parse'
import Chance from 'chance'
const  chance = Chance()
import db2 from '../db.js'

// let validRowCount = 0;
// const maxValidRows = 100;
// let continueProcessing = true;
// let newData = [];

// fs.createReadStream("./shoes.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     if (!continueProcessing) {
//         return;
//     }
  
//     if (validRowCount >= maxValidRows) {
//         continueProcessing = false;
//         return;
//     }

//     if (row[10] != '' && row[11] != '') {
//         newData.push(row);
//         validRowCount++;
//     }
// })
// .on("end", function () {

//     console.log("end");
//     console.log(newData);
//     const selectedColumns = newData.map(([category, , name, current_price, raw_price, , discount, , , , , , variation_0_color, variation_1_color, variation_0_thumbnail, variation_0_image, variation_1_thumbnail, variation_1_image, image_url, , , model]) => {
//         return [category, name, current_price, raw_price, discount, variation_0_color, variation_1_color, variation_0_thumbnail, variation_0_image, variation_1_thumbnail, variation_1_image, image_url, model];
//       });
//     console.log(selectedColumns);
//     for (const row of selectedColumns) {
//         const [category, name, current_price, raw_price, discount, variation_0_color, variation_1_color, variation_0_thumbnail, variation_0_image, variation_1_thumbnail, variation_1_image, image_url, model] = row;
//         const description = chance.paragraph({ sentences: 3 });
//         const stars = chance.floating({ min: 1, max:5, fixed: 1})

//         const values = [
//           category,
//           name,
//           current_price,
//           raw_price,
//           discount,
//           variation_0_color,
//           variation_1_color,
//           variation_0_thumbnail,
//           variation_0_image,
//           variation_1_thumbnail,
//           variation_1_image,
//           image_url,
//           model,
//           stars,
//           description
//         ];
        
//         const q = 'INSERT INTO products (category, name, current_price, raw_price, discount, variation_0_color, variation_1_color, variation_0_thumbnail, variation_0_image, variation_1_thumbnail, variation_1_image, image_url, model, stars, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      
//         db.query(q, values, (err, data) => {
//           if (err) console.log(err);
//           console.log("done");
//         });
//     }
    
// })
// .on("error", function (error) {
//     console.log(error.message);
// });



const data = []


// fs.createReadStream('./new/product.csv')
//   .pipe(parse({ delimiter: ';' , from_line: 2 })) 
//   .on('data', (row) => {
//     data.push(row);
//   })
//   .on('end', () => {
//     console.log(data);
//   });
  
//   const q = "SET FOREIGN_KEY_CHECKS = 0"
//   db2.query(q, (err, dataa) => {
//     if(err) return console.log(err)
//     for (const row of data) {
//       const query = 'INSERT INTO product (id, category_id, name, description, product_image) VALUES (?, ?, ?, ?, ?)';
//       const values = [row[0], row[1], row[2], row[3], row[4]];
    
//       db2.query(query, values, (error, results) => {
//         if (error) {
//           console.error('Error inserting data:', error);
//         } else {
//           console.log('Data inserted successfully:', results);
//         }
//       });
//     }
//   })


// fs.createReadStream('./new/product_category.csv')
//   .pipe(parse({ delimiter: ';' , from_line: 2 })) 
//   .on('data', (row) => {
//     data.push(row);
//   })
//   .on('end', () => {
//     console.log(data);
//   });
  
//   const q = "SET FOREIGN_KEY_CHECKS = 0"
//   db2.query(q, (err, dataa) => {
//     if(err) return console.log(err)
//     for (const row of data) {
//       const query = 'INSERT INTO product_category (id, parent_category_id, category_name) VALUES (?, ?, ?)';
//       const values = [row[0], row[1], row[2]];
    
//       db2.query(query, values, (error, results) => {
//         if (error) {
//           console.error('Error inserting data:', error);
//         } else {
//           console.log('Data inserted successfully:', results);
//         }
//       });
//     }
//   })

// fs.createReadStream('./new/product_configuration.csv')
//   .pipe(parse({ delimiter: ';' , from_line: 2 })) 
//   .on('data', (row) => {
//     data.push(row);
//   })
//   .on('end', () => {
//     console.log(data);
//   });
  
//   const q = "SET FOREIGN_KEY_CHECKS = 0"
//   db2.query(q, (err, dataa) => {
//     if(err) return console.log(err)
//     for (const row of data) {
//       "product_item_id";"variation_option_id"
//       const query = 'INSERT INTO product_configuration (product_item_id, variation_option_id) VALUES (?, ?)';
//       const values = [row[0], row[1], row[2]];
    
//       db2.query(query, values, (error, results) => {
//         if (error) {
//           console.error('Error inserting data:', error);
//         } else {
//           console.log('Data inserted successfully:', results);
//         }
//       });
//     }
//   })
// fs.createReadStream('./new/product_item.csv')
// .pipe(parse({ delimiter: ';' , from_line: 2 })) 
// .on('data', (row) => {
//   data.push(row);
// })
// .on('end', () => {
//   console.log(data);
// });

// const q = "SET FOREIGN_KEY_CHECKS = 0"
// db2.query(q, (err, dataa) => {
//   if(err) return console.log(err)
//   for (const row of data) {
//     "id";"product_id";"SKU";"qty_in_stock";"product_image";"price"
//     const query = 'INSERT INTO product_item (id, product_id, SKU, qty_in_stock, product_image, price) VALUES (?, ?, ?, ?, ?, ?)';
//     const values = [row[0], row[1], row[2], row[3], row[4], row[5]];
  
//     db2.query(query, values, (error, results) => {
//       if (error) {
//         console.error('Error inserting data:', error);
//       } else {
//         console.log('Data inserted successfully:', results);
//       }
//     });
//   }
// })
// fs.createReadStream('./new/promotion_product.csv')
//   .pipe(parse({ delimiter: ';' , from_line: 2 })) 
//   .on('data', (row) => {
//     data.push(row);
//   })
//   .on('end', () => {
//     console.log(data);
//   });
  
//   const q = "SET FOREIGN_KEY_CHECKS = 0"
//   db2.query(q, (err, dataa) => {
//     if(err) return console.log(err)
//     for (const row of data) {
//       "product_id";"promotion_id"
//       const query = 'INSERT INTO promotion_product (product_id, promotion_id) VALUES (?, ?)';
//       const values = [row[0], row[1]];
    
//       db2.query(query, values, (error, results) => {
//         if (error) {
//           console.error('Error inserting data:', error);
//         } else {
//           console.log('Data inserted successfully:', results);
//         }
//       });
//     }
//   })
// fs.createReadStream('./new/promotion.csv')
// .pipe(parse({ delimiter: ';' , from_line: 2 })) 
// .on('data', (row) => {
//   data.push(row);
// })
// .on('end', () => {
//   console.log(data);
// });

// const q = "SET FOREIGN_KEY_CHECKS = 0"
// db2.query(q, (err, dataa) => {
//   if(err) return console.log(err)
//   for (const row of data) {
//     "id";"name";"description";"discount_rate";"start_date";"end_date"
//     const query = 'INSERT INTO promotion (id, name, description, discount_rate, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)';
//     const values = [row[0], row[1], row[2], row[3], row[4], row[5]];
  
//     db2.query(query, values, (error, results) => {
//       if (error) {
//         console.error('Error inserting data:', error);
//       } else {
//         console.log('Data inserted successfully:', results);
//       }
//     });
//   }
// })
// fs.createReadStream('./new/shopping_cart_item.csv')
//   .pipe(parse({ delimiter: ';' , from_line: 2 })) 
//   .on('data', (row) => {
//     data.push(row);
//   })
//   .on('end', () => {
//     console.log(data);
//   });
  
//   const q = "SET FOREIGN_KEY_CHECKS = 0"
//   db2.query(q, (err, dataa) => {
//     if(err) return console.log(err)
//     for (const row of data) {
//       "id";"cart_id";"product_item_id";"qty"
//       const query = 'INSERT INTO shopping_cart_item (id, cart_id, product_item_id, qty) VALUES (?, ?, ?, ?)';
//       const values = [row[0], row[1], row[2], row[3]];
    
//       db2.query(query, values, (error, results) => {
//         if (error) {
//           console.error('Error inserting data:', error);
//         } else {
//           console.log('Data inserted successfully:', results);
//         }
//       });
//     }
//   })
// fs.createReadStream('./new/shopping_cart.csv')
//   .pipe(parse({ delimiter: ';' , from_line: 2 })) 
//   .on('data', (row) => {
//     data.push(row);
//   })
//   .on('end', () => {
//     console.log(data);
//   });
  
//   const q = "SET FOREIGN_KEY_CHECKS = 0"
//   db2.query(q, (err, dataa) => {
//     if(err) return console.log(err)
//     for (const row of data) {
//       "id";"user_id"
//       const query = 'INSERT INTO shopping_cart (id, user_id) VALUES (?, ?)';
//       const values = [row[0], row[1]];
    
//       db2.query(query, values, (error, results) => {
//         if (error) {
//           console.error('Error inserting data:', error);
//         } else {
//           console.log('Data inserted successfully:', results);
//         }
//       });
//     }
//   })
// fs.createReadStream('./new/site_user.csv')
// .pipe(parse({ delimiter: ';' , from_line: 2 })) 
// .on('data', (row) => {
//   data.push(row);
// })
// .on('end', () => {
//   console.log(data);
// });

// const q = "SET FOREIGN_KEY_CHECKS = 0"
// db2.query(q, (err, dataa) => {
//   if(err) return console.log(err)
//   for (const row of data) {
//     "id";"email_address";"phone_number";"name";"user";"password"
//     const query = 'INSERT INTO site_user (id, email_address, phone_number, name, user, password) VALUES ( ?, ?, ?, ?, ?, ?)';
//     const values = [row[0], row[1], row[2], row[3], row[4], row[5]];
  
//     db2.query(query, values, (error, results) => {
//       if (error) {
//         console.error('Error inserting data:', error);
//       } else {
//         console.log('Data inserted successfully:', results);
//       }
//     });
//   }
// })
// fs.createReadStream('./new/varaition_option.csv')
// .pipe(parse({ delimiter: ';' , from_line: 2 })) 
// .on('data', (row) => {
//   data.push(row);
// })
// .on('end', () => {
//   console.log(data);
// });

// const q = "SET FOREIGN_KEY_CHECKS = 0"
// db2.query(q, (err, dataa) => {
//   if(err) return console.log(err)
//   for (const row of data) {
//     "id";"variation_id";"value"
//     const query = 'INSERT INTO variation_option (id, variation_id, value) VALUES (?, ?, ?)';
//     const values = [row[0], row[1], row[2]];
  
//     db2.query(query, values, (error, results) => {
//       if (error) {
//         console.error('Error inserting data:', error);
//       } else {
//         console.log('Data inserted successfully:', results);
//       }
//     });
//   }
// })

  fs.createReadStream('./new/varaition.csv')
  .pipe(parse({ delimiter: ';' , from_line: 2 })) 
  .on('data', (row) => {
    data.push(row);
  })
  .on('end', () => {
    console.log(data);
  });
  
  const q = "SET FOREIGN_KEY_CHECKS = 0"
  db2.query(q, (err, dataa) => {
    if(err) return console.log(err)
    for (const row of data) {
      "id";"category_id";"name"
      const query = 'INSERT INTO variation (id, category_id, name) VALUES (?, ?, ?)';
      const values = [row[0], row[1], row[2]];
    
      db2.query(query, values, (error, results) => {
        if (error) {
          console.error('Error inserting data:', error);
        } else {
          console.log('Data inserted successfully:', results);
        }
      });
    }
  })


