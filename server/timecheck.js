import { nanoid } from "nanoid";
import db from "./db.js";
import moment from "moment";

function getTime() {
    return moment().format("YYYY-MM-DD HH:mm:ss");
}



    const time = getTime();
    db.query("SELECT start_date, end_date FROM promotion WHERE start_date < ? && end_date > ?", [time, time], (err, data) => {
        if(err) throw console.log(err);
        console.log(data);
        return data
    })


// const start_time = getTime();
// const end_time = moment("2023-12-31 23:59:59").format("YYYY-MM-DD HH:mm:ss");

// const id = nanoid()

// const q = "INSERT INTO promotion (id, start_date, end_date) VALUES (?, ?, ?)";

// db.query(q, [id, start_time, end_time], (err, data) => {
//     if(err) throw console.log(err);
//     console.log(data);
//     return data
// })