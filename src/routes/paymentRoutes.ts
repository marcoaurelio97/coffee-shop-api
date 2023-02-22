import paymentController from '../controllers/paymentController';
const express = require('express');

const router = express.Router();

router.get('/', paymentController.GetAll);
router.get('/:id', paymentController.GetById);

export default router;