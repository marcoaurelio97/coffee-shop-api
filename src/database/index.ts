import config from "../config";
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(path.resolve(__dirname, './database.db'), sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database!');
});

// const connect = () => {
//     db = new sqlite3.Database(path.resolve(__dirname, './database.db'), sqlite3.OPEN_READWRITE, (err) => {
//         if (err) {
//             console.error(err.message);
//         }
//         console.log('Connected to the database!');
//     });
// }

// const close = async () => {
//     db.close((err) => {
//         if (err) console.error(err.message);

//         console.log('Closed the database connection!');
//     });
// }

const AddProduct = async (product) => {
    await db.run(`INSERT INTO products VALUES (null, '${product.name}', ${product.price})`);
}

export { AddProduct };