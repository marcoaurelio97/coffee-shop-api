import productRoutes from './routes/productRoutes';
import saleRoutes from './routes/saleRoutes';
import paymentRoutes from './routes/paymentRoutes';

const express = require("express");
const cors = require('cors');

const port = process.env.PORT || '4000';
const app = express();

// Configs
app.use(express.json());

app.use(cors());

// Routes
app.use('/api/product', productRoutes);
app.use('/api/sale', saleRoutes);
app.use('/api/payment', paymentRoutes);

// Server
app.listen(port, async () => {
    console.log(`App listening on port ${port}`);
});

export default app;