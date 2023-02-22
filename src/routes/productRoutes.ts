import productController from '../controllers/productController';
const express = require('express');

const router = express.Router();

router.get('/', productController.GetAll);
router.get('/:id', productController.GetById);
router.post('/', productController.Add);
router.put('/:id', productController.Update);
router.delete('/:id', productController.Delete);

export default router;