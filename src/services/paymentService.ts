import paymentRepository from '../repositories/paymentRepository';

const GetAll = async () => {
    return await paymentRepository.GetAll();
};

const GetById = async (id: number) => {
    var payment = await paymentRepository.GetById(id);
    
    if (payment == null)
        throw new Error(`Payment with Id ${id} not found`);

    return payment;
};

export {
    GetAll,
    GetById
};