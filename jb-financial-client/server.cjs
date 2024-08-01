// server.cjs
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/jb-financial", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const fundPriceSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    link: String,
    buyPrice: Number,
    sellPrice: Number,
});

const FundPrice = mongoose.model("FundPrice", fundPriceSchema, "jb-financial");
// API endpoint to get fund price data
app.get('/api/fund-prices', async (req, res) => {
    try {
        const fundPrices = await FundPrice.find();
        res.json(fundPrices);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
