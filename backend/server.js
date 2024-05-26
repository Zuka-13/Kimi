// server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors'); // Import the cors package

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use CORS middleware
app.use(cors());

app.use('/api/auth', authRoutes);

sequelize.sync()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Error connecting to PostgreSQL:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
