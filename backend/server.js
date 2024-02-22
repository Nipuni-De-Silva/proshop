require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API is running ....');
})

app.use('/api/products', productRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});