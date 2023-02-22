import { CreateProductModel } from "../models/product/createProductModel";
import productRepository from '../repositories/productRepository';
import { UpdateProductModel } from "../models/product/updateProductModel";

const GetAll = async () => {
    return await productRepository.GetAll();
};

const GetById = async (id: number) => {
    var product = await productRepository.GetById(id);
    
    if (product == null)
        throw new Error(`Product with Id ${id} not found`);

    return product;
};

const Create = async (product: CreateProductModel) => {
    await productRepository.Add(product);
};

const Update = async (id: number, productUpdate: UpdateProductModel) => {
    var product = await GetById(id);

    product.Name = productUpdate.Name;
    product.Price = productUpdate.Price;

    return await productRepository.Update(product);
};

const Delete = async (id: string) => {
    return await productRepository.Delete(id);
};

export {
    GetAll,
    GetById,
    Create,
    Update,
    Delete
};