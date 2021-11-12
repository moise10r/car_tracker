const express = require('express');
const app = express();
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const customer = require('./routers/customer');

dotenv.config({ path: './config/config.env' });
connectDB();
//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', customer);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
