import { CreateSaleProductsModel } from "./createSaleProductsModel";

interface CreateSaleModel {
    PaymentId: number;
    Comments: string;
    Products: CreateSaleProductsModel[];
    TotalValue: number;
}

export { CreateSaleModel };