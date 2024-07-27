const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuildingSchema = new Schema({
    name: String,
    address: String,
    units: [{ type: Schema.Types.ObjectId, ref: 'Unit' }]
});

module.exports = mongoose.model('Building', BuildingSchema);
