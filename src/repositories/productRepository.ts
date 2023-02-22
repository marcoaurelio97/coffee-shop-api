import db from "../database";
import { ProductModel } from "../models/product/productModel";
import { CreateProductModel } from "../models/product/createProductModel";

const GetAll = () : Promise<ProductModel[]> => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM products`, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

const GetById = (id: number) : Promise<ProductModel> => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM products WHERE Id = ${id}`, (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
}

const Add = async (product: CreateProductModel) : Promise<void> => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO products VALUES (null, '${product.Name}', ${product.Price})`);
        resolve();
    });
}

const Update = async (product: ProductModel) : Promise<void> => {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE products SET Name = '${product.Name}', Price = ${product.Price} WHERE Id = ${product.Id}`);
        resolve();
    });
}

const Delete = (id: string) : Promise<void> => {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM products WHERE Id = ${id}`);
        resolve();
    });
}

export default {
    GetAll,
    GetById,
    Add,
    Update,
    Delete
};