const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    type: String,
    size: String,
    condition: String,
    tags: [String],
    images: [String],
    status: { type: String, default: 'available' },
    uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
