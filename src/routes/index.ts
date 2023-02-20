import productController from '../controllers/productController';
const express = require('express');

const router = express.Router();

router.get('/', productController.getAll);
router.post('/', productController.post);

export default router;