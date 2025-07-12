const Item = require('../models/Item');
const cloudinary = require('../utils/cloudinary');

exports.addItem = async (req, res) => {
    try {
        const uploader = req.user.id;
        const images = [];

        for (const file of req.body.images) {
            const result = await cloudinary.uploader.upload(file, { folder: "rewear_items" });
            images.push(result.secure_url);
        }

        const item = await Item.create({ ...req.body, images, uploader });
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find().populate('uploader', 'name');
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id).populate('uploader', 'name email');
        res.json(item);
    } catch (err) {
        res.status(404).json({ error: 'Item not found' });
    }
};
