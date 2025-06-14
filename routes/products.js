const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// Middleware
const logger = require('../middleware/logger');
const auth = require('../middleware/auth');
const validateProduct = require('../middleware/validateProduct');

// Apply logger globally to this router
router.use(logger);

// Sample in-memory data
let products = [
  { id: '1', name: 'Laptop', description: 'Fast laptop', price: 1000, category: 'electronics', inStock: true },
  { id: '2', name: 'Phone', description: 'Smartphone', price: 600, category: 'electronics', inStock: true }
];

// GET all products with filtering, search, and pagination
router.get('/', auth, (req, res) => {
  let { category, search, page = 1, limit = 10 } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  let filtered = [...products];

  // Filter by category
  if (category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  // Search by name
  if (search) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }

  // Pagination
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = filtered.slice(start, end);

  res.json({
    total: filtered.length,
    page,
    limit,
    results: paginated
  });
});

// GET product statistics - count by category
router.get('/stats', auth, (req, res) => {
  const stats = {};

  products.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });

  res.json({ stats });
});

// GET one product
router.get('/:id', auth, (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// CREATE product
router.post('/', auth, validateProduct, (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// UPDATE product
router.put('/:id', auth, validateProduct, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

// DELETE product
router.delete('/:id', auth, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });
  products.splice(index, 1);
  res.status(204).end();
});

module.exports = router;