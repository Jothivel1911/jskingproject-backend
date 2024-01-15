// routes/vendorRoutes.js
const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendor');

// Create Vendor
router.post('/create', async (req, res) => {
  try {
    const newVendor = await Vendor.create(req.body);
    res.status(201).json(newVendor);
  } catch (error) {
    console.error('Error creating vendor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get paginated list of vendors
router.get('/list', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  try {
    const vendors = await Vendor.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(vendors);
  } catch (error) {
    console.error('Error fetching vendors:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get vendor details by ID
router.get('/:vendorId', async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.vendorId);
    res.json(vendor);
  } catch (error) {
    console.error('Error fetching vendor details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update vendor by ID
router.put('/:vendorId', async (req, res) => {
  try {
    const updatedVendor = await Vendor.findByIdAndUpdate(
      req.params.vendorId,
      req.body,
      { new: true } // Return the updated document
    );
    res.json(updatedVendor);
  } catch (error) {
    console.error('Error updating vendor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete vendor by ID
router.delete('/:vendorId', async (req, res) => {
  try {
    await Vendor.findByIdAndDelete(req.params.vendorId);
    res.json({ message: 'Vendor deleted successfully' });
  } catch (error) {
    console.error('Error deleting vendor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
