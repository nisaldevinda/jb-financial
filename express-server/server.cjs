const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/jb-financial")
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with a failure code
    });

// Schemas and Models
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

const jobSchema = new mongoose.Schema({
    category: String,
    title: String,
    location: String,
    tags: [String],
    link: String,
});

const careerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    tags: { type: [String], required: true },
    content: [
        {
            heading: { type: String, required: true },
            paragraphs: { type: [String], required: true }
        }
    ]
}, { timestamps: true });

const fundSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    buyPrice1: { type: Number, required: true },
    buyPrice2: { type: Number },
    sellPrice: { type: Number, required: true },
    nav: { type: Number, required: true },
    type: { type: String, required: true }, // e.g., "Value Equity Fund", "Money Market Fund"
});

// Define schemas for each fund type
const valueEquityFundSchema = new mongoose.Schema({
    date: { type: String, required: true },
    JBVEF: { type: Number, required: true },
    SPSL20TRI: { type: Number, required: true },
    ASTRI: { type: Number, required: true },
});

const moneyMarketFundSchema = new mongoose.Schema({
    date: { type: String, required: true },
    JBMMF: { type: Number, required: true },
    NDBIB: { type: Number, required: true },
    AWFDR: { type: Number, required: true },
});

const shortTermGiltFundSchema = new mongoose.Schema({
    date: { type: String, required: true },
    JBGILT: { type: Number, required: true },
    NDBIB: { type: Number, required: true },
    TBILL: { type: Number, required: true },
});

// Create models for each fund type
const ValueEquityFund = mongoose.model("ValueEquityFund", valueEquityFundSchema,"fund=performance-value-eq");
// const MoneyMarketFund = mongoose.model("MoneyMarketFund", moneyMarketFundSchema);
// const ShortTermGiltFund = mongoose.model("ShortTermGiltFund", shortTermGiltFundSchema);

const Fund = mongoose.model("Fund", fundSchema, "Fund");
const Career = mongoose.model('Career', careerSchema,'careers');
const FundPrice = mongoose.model("FundPrice", fundPriceSchema, "jb-financial");
const Blog = mongoose.model('Blog', blogSchema, 'blog');
const Job = mongoose.model('Job', jobSchema, 'careers');

// API Endpoints

// Routes for Value Equity Fund
app.get("/funds/value-equity-fund", async (req, res) => {
    try {
        const data = await ValueEquityFund.find();
        res.json(data);
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
});

app.post("/funds/value-equity-fund", async (req, res) => {
    const newRecord = new ValueEquityFund(req.body);
    try {
        await newRecord.save();
        res.json("Value Equity Fund record added!");
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
});

// Routes for Money Market Fund
app.get("/funds/money-market-fund", async (req, res) => {
    try {
        const data = await MoneyMarketFund.find();
        res.json(data);
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
});

app.post("/funds/money-market-fund", async (req, res) => {
    const newRecord = new MoneyMarketFund(req.body);
    try {
        await newRecord.save();
        res.json("Money Market Fund record added!");
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
});

// Routes for Short Term Gilt Fund
app.get("/funds/short-term-gilt-fund", async (req, res) => {
    try {
        const data = await ShortTermGiltFund.find();
        res.json(data);
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
});

app.post("/funds/short-term-gilt-fund", async (req, res) => {
    const newRecord = new ShortTermGiltFund(req.body);
    try {
        await newRecord.save();
        res.json("Short Term Gilt Fund record added!");
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
});


// Get all funds of a specific type
app.get("/funds/:type", async (req, res) => {
    const { type } = req.params;
    try {
        const funds = await Fund.find({ type });
        res.json(funds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update or add new fund entry
app.post("/funds", async (req, res) => {
    const { date, buyPrice1, buyPrice2, sellPrice, nav, type } = req.body;
    console.log(date)
    try {
        const existingFund = await Fund.findOneAndUpdate(
            { date, type },
            { buyPrice1, buyPrice2, sellPrice, nav },
            { new: true, upsert: true }
        );
        res.json(existingFund);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all jobs
app.get('/api/jobs', async (req, res, next) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        next(error);
    }
});

app.get('/api/careers/:id', async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);
        if (!career) return res.status(404).json({ message: 'Career not found' });
        res.json(career);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

app.post('/api/careers', async (req, res) => {
    try {
        const newCareer = new Career(req.body);
        const savedCareer = await newCareer.save();
        res.status(201).json(savedCareer);
    } catch (error) {
        res.status(400).json({ message: 'Error creating career', error });
    }
});


app.put('/api/careers/:id', async (req, res) => {
    try {
        const updatedCareer = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCareer) return res.status(404).json({ message: 'Career not found' });
        res.json(updatedCareer);
    } catch (error) {
        res.status(400).json({ message: 'Error updating career', error });
    }
});


app.delete('/api/careers/:id', async (req, res) => {
    try {
        const deletedCareer = await Career.findByIdAndDelete(req.params.id);
        if (!deletedCareer) return res.status(404).json({ message: 'Career not found' });
        res.json({ message: 'Career deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});






// Get all fund prices
app.get('/api/fund-prices', async (req, res, next) => {
    try {
        const fundPrices = await FundPrice.find();
        res.json(fundPrices);
    } catch (error) {
        next(error);
    }
});

// Get all blogs
app.get('/api/blogs', async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        next(error);
    }
});

// Get a specific blog by ID
app.get('/api/blogs/:id', async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(blog);
    } catch (error) {
        next(error);
    }
});

// Create a new blog
app.post('/api/blogs', async (req, res, next) => {
    try {
        const newBlog = new Blog(req.body);
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        next(error);
    }
});

// Update an existing blog by ID
app.put('/api/blogs/:id', async (req, res, next) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedBlog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(updatedBlog);
    } catch (error) {
        next(error);
    }
});

// Delete a blog by ID
app.delete('/api/blogs/:id', async (req, res, next) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        next(error);
    }
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'An internal server error occurred.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
