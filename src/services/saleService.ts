import productService = require('../services/productService');
import paymentService = require('../services/paymentService');
import saleRepository from '../repositories/saleRepository';
import saleProductRepository from '../repositories/saleProductRepository';
import { CreateSaleModel } from "../models/sale/createSaleModel";

const GetAll = async () => {
    return await saleRepository.GetAll();
};

const GetById = async (id: number) => {
    var product = await saleRepository.GetById(id);
    
    if (product == null)
        throw new Error(`Product with Id ${id} not found`);

    return product;
};

const Create = async (sale: CreateSaleModel) => {
    sale.TotalValue = 0;

    await paymentService.GetById(sale.PaymentId);

    for (const productSale of sale.Products) {
        var product = await productService.GetById(productSale.ProductId);

        productSale.Name = product.Name;
        productSale.UnitPrice = product.Price;

        sale.TotalValue += product.Price * productSale.Quantity;
    }

    var saleId = await saleRepository.Add(sale);

    for (const productSale of sale.Products)
        await saleProductRepository.Add(saleId, productSale);
};

export {
    GetAll,
    GetById,
    Create
};