require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// --- Middleware ---
// We make CORS more open for Vercel
app.use(cors()); 
app.use(express.json());

// --- MongoDB Connection ---
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("✅ MongoDB database connection established successfully");
});

// --- API Routes ---
const projectsRouter = require('./routes/projects');
const contactRouter = require('./routes/contact');

app.use('/api/projects', projectsRouter); // Note: I've added /api here for consistency
app.use('/api/contact', contactRouter);

// --- IMPORTANT: EXPORT THE APP FOR VERCEL ---
module.exports = app;