const express = require('express');
const router = express.Router();
const Unit = require('../models/Unit');

// Get a specific unit
router.get('/:id', async (req, res) => {
    const unit = await Unit.findById(req.params.id);
    res.render('unit', { unit });
});

// Add more routes as needed...

module.exports = router;
