const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  bio: { type: String, required: true },
  photo: { type: String },
  contact: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);
