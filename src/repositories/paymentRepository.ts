import db from "../database";
import { PaymentModel } from "../models/payment/paymentModel";

const GetAll = () : Promise<PaymentModel[]> => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM payments`, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

const GetById = (id: number) : Promise<PaymentModel> => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM payments WHERE Id = ${id}`, (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
}

export default {
    GetAll,
    GetById
};