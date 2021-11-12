const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const customerSchema = new mongoose.Schema({
  vaccinated: {
    type: Boolean,
  },
  cardId: {
    type: String,
    required: true,
  },
  money: {
    type: Number,
    required: true,
  },
});
const Customer = mongoose.model('customers', customerSchema);
exports.Customer = Customer;
