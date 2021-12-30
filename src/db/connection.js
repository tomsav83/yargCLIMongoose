// always edit and test connection.js first and import dependencies
require('dotenv').config();
const mongoose = require('mongoose');

// create connection function with try/catch to check connection to db using line 9 and contents of .env

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    // console.log('Successfully connected to db');
  } catch (error) {
    console.log(error);
  }
};

connection();
