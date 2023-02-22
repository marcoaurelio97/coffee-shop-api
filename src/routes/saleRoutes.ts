import saleController from '../controllers/saleController';
const express = require('express');

const router = express.Router();

router.get('/', saleController.GetAll);
router.get('/:id', saleController.GetById);
router.post('/', saleController.Add);

export default router;