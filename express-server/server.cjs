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

const Career = mongoose.model('Career', careerSchema,'careers');

const FundPrice = mongoose.model("FundPrice", fundPriceSchema, "jb-financial");
const Blog = mongoose.model('Blog', blogSchema, 'blog');
const Job = mongoose.model('Job', jobSchema, 'careers');

// API Endpoints

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
