const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  priceMin: { type: Number, required: true },
  priceMax: { type: Number },
  plotSizeMin: { type: Number, required: true },
  plotSizeMax: { type: Number },
  description: { type: String, required: true },
  status: { type: String, enum: ['Ongoing', 'Completed'], default: 'Ongoing' },
  images: [{ type: String }],
  layoutMap: { type: String },
  features: [{ type: String }],
  landmarks: [{ type: String }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
