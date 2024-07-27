const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/rental-properties', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
const buildingsRoutes = require('./routes/buildings');
const unitsRoutes = require('./routes/units');

app.use('/buildings', buildingsRoutes);
app.use('/units', unitsRoutes);

app.get('/', (req, res) => {
    res.redirect('/buildings');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
