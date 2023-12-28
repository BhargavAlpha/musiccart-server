const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;

const app = express();
const port = process.env.PORT || 4500;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully');
});

// Routes (to be implemented)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
