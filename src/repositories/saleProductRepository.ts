import db from "../database";
import { CreateSaleProductsModel } from "../models/sale/createSaleProductsModel";

const Add = async (saleId: number, product: CreateSaleProductsModel) : Promise<void> => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO salesProducts VALUES (null, ${saleId}, '${product.Name}', ${product.UnitPrice}, ${product.Quantity})`);
        resolve();
    });
}

export default {
    Add
};