const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
    number: String,
    tenantName: String,
    rentAmount: Number,
    dueDate: Date,
    paymentStatus: String,
    paymentHistory: [{ date: Date, amount: Number }]
});

module.exports = mongoose.model('Unit', UnitSchema);
