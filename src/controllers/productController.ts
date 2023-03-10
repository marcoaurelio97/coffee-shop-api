import { Request, Response } from "express";
import service = require('../services/productService');

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

const Add = async (req: Request, res: Response) => {
    try {
        await service.Create(req.body);

        res.status(httpStatus.CREATED).send();
    } catch (error: any) {
        res.status(httpStatus.BAD_REQUEST).send({ error: error.message });
    }
};

const Update = async (req: Request, res: Response) => {
    try {
        const result = await service.Update(parseInt(req.params.id), req.body);

        res.status(httpStatus.OK).send(result);
    } catch (error: any) {
        res.status(httpStatus.BAD_REQUEST).send({ error: error.message });
    }
};

const Delete = async (req: Request, res: Response) => {
    try {
        const result = await service.Delete(req.params.id);

        res.status(httpStatus.OK).send(result);
    } catch (error: any) {
        res.status(httpStatus.BAD_REQUEST).send({ error: error.message });
    }
};

export default {
    GetAll,
    GetById,
    Add,
    Update,
    Delete
};