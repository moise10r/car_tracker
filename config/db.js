const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const connecton = mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB is connected:${process.env.MONGO_URI} `);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
