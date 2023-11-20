const mongoose = require('mongoose');

const priestSchema = new mongoose.Schema({
  priest_id: { type: String, minlength: 1, maxlength: 255 },
  priest_name: { type: String, minlength: 1, maxlength: 255 },
  priest_details: { type: String, minlength: 1, maxlength: 255 },
});

const religiousPlaceSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 1, maxlength: 255 },
  place_name: { type: String, required: true, minlength: 1, maxlength: 255 },
  location: { type: String, required: true, minlength: 1, maxlength: 255 },
  approveStatus: { type: Boolean, default: false },
  religiousType: { type: String, default: 'Unknown', maxlength: 255 },
  priest_list: [priestSchema],
  latitude: { type: Number, min: -90, max: 90 },
  longitude: { type: Number, min: -180, max: 180 },
});

const ReligiousPlace = mongoose.model('ReligiousPlace', religiousPlaceSchema);

module.exports = ReligiousPlace;