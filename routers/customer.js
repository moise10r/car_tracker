const express = require('express');
const { Customer } = require('../models/customer');
const router = express.Router();

router.post('/api/customer', async (req, res) => {
  const { money, cardId, vaccinated } = req.body;
  const { error } = validateCustomer(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  let customers = await Customer.find();
  let customer = await Customer.findOne({ $or: [{ plateNumber }, { cardId }] });
  if (customer) {
    return res
      .status(400)
      .send('The customer with these credentials exists already');
  }
  customer = new Customer({
    money,
    cardId,
    vaccinated,
  });
  try {
    customer.save();
    res.send(customer).status(200);
  } catch (error) {
    res.status(404).send('something went wrong');
  }
});

router.get('/api/customer', async (req, res) => {
  const customer = await Customer.findOne({ cardId: req.query.cardId });
  if (!customer)
    return res.status(400).send('There is no a customer with that plateNumber');
  customer.state = !customer.state;
  customer.save();
  res.status(200).send(customer);
});

module.exports = router;
