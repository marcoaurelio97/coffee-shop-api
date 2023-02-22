import { LastIdCreatedModel } from "src/models/lastIdCreatedModel";
import db from "../database";
import { ProductModel } from "../models/product/productModel";
import { CreateSaleModel } from "../models/sale/createSaleModel";

const GetAll = () : Promise<ProductModel[]> => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM sales`, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

const GetById = (id: number) : Promise<ProductModel> => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM sales WHERE Id = ${id}`, (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
}

const Add = async (sale: CreateSaleModel) : Promise<number> => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO sales VALUES (null, ${sale.PaymentId}, ${sale.TotalValue}, '${sale.Comments}')`, async (err, row) => {
            resolve(await GetIdInserted());
        });
    });
}

const GetIdInserted = async (): Promise<number> => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT last_insert_rowid() as Id`, (err, row: LastIdCreatedModel) => {
            resolve(row.Id);
        });
    });
}

export default {
    GetAll,
    GetById,
    Add
};