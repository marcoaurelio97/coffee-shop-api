import { Request, Response } from "express";
import service = require('../services/productService');

const httpStatus = require("http-status");

const getAll = async (req: Request, res: Response) => {
    try {
        const result = await service.GetAll();

        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

const post = async (req: Request, res: Response) => {
    try {
        await service.Create();

        res.status(httpStatus.CREATED).send();
    } catch (error: any) {
        res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};

export default {
    getAll,
    post
};