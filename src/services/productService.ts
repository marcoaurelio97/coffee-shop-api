import { ErrorException } from "../exceptions/errorException";
import { AddProduct } from '../database';
import config from "../config";

const httpStatus = require("http-status");

const GetAll = async () => {
    return [];
};

const Create = async () => {
    var product = {
        name: "teste",
        price: 10
    };

    await AddProduct(product);
};

export {
    GetAll,
    Create
};