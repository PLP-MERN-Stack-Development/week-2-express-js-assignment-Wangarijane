require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API!');
});

// Handle 404 for unmatched routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
