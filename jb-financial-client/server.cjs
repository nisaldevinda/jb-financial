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

const blogSchema = new mongoose.Schema({
    category: String,
    duration: String,
    title: String,
    description: String,
    imageUrl: String,
    link: String,
    content: [
        {
            heading: String,
            paragraphs: [String],
        },
    ],
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

const Blog = mongoose.model('Blog', blogSchema,'blog');

// API endpoint to get blog data
app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/api/blogs/:id', async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(blog);
    } catch (error) {
        next(error); // Pass errors to Express error handler
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
