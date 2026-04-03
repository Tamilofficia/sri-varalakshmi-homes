const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');

dotenv.config();

// We will only call connectDB if the URI is defined, to avoid crashing immediately before user sets up .env
if (process.env.MONGODB_URI) {
  connectDB();
} else {
  console.log('MongoDB URI not provided. Please set MONGODB_URI in .env file.');
}

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

// Basic API check
app.get('/api/health', (req, res) => {
  res.json({ message: 'Sri Varalakshmi Homes API is running...' });
});

// Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/team', require('./routes/team'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/inquiries', require('./routes/inquiries'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
