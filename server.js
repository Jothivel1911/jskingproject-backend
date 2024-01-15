const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const authRoutes = require('./routes/authRoutes');
const vendorRoutes = require('./routes/vendorRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB using environment variable
const mongoURI = process.env.MONGODB_URI || 'mongodb+mongodb+srv://jo1911:vel123@atlascluster.m76bzpr.mongodb.net/?retryWrites=true&w=majority://username:password@your-cluster.mongodb.net/your-database?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(cors()); // Enable CORS for all routes during development
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/vendors', vendorRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
