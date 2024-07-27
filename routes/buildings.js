const express = require('express');
const router = express.Router();
const Building = require('../models/Building');
const Unit = require('../models/Unit');

// Get all buildings
router.get('/', async (req, res) => {
    const buildings = await Building.find().populate('units');
    res.render('buildings', { buildings });
});

// Get a specific building's units
router.get('/:id', async (req, res) => {
    const building = await Building.findById(req.params.id).populate('units');
    res.render('units', { building });
});

// Add more routes as needed...

module.exports = router;
