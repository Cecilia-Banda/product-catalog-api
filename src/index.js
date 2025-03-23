require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); 
app.use(morgan('dev')); 
app.use(cors()); 

// Routes
app.use('/api', routes);
app.get("/api/products", (req, res) => {
    res.json(products)
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
