import { Request, Response } from "express";
import service = require('../services/paymentService');

import httpStatus = require("http-status");

const GetAll = async (req: Request, res: Response) => {
    try {
        const result = await service.GetAll();

        res.status(httpStatus.OK).send(result);
    } catch (error: any) {
        res.status(httpStatus.BAD_REQUEST).send({ error: error.message });
    }
};

const GetById = async (req: Request, res: Response) => {
    try {
        const result = await service.GetById(parseInt(req.params.id));

        res.status(httpStatus.OK).send(result);
    } catch (error: any) {
        res.status(httpStatus.BAD_REQUEST).send({ error: error.message });
    }
};

export default {
    GetAll,
    GetById
};