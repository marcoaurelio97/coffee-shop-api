import productRoutes from './routes';

const express = require("express");
const cors = require('cors');

const port = process.env.PORT || '4000';
const app = express();

// Configs
app.use(express.json());

app.use(cors());

// Routes
app.use('/api/product', productRoutes);

// Server
app.listen(port, async () => {
    console.log(`App listening on port ${port}`);
});

export default app;