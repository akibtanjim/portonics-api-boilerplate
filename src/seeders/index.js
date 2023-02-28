'use strict';

// Load Dependencinces
require('dotenv').config();
const mongoose = require('mongoose');

const mongoURL = `mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`;
mongoose.connect(mongoURL).catch((e) => {
  console.log(e);
});


const seedDB = async () => {};

seedDB().then(() => {
  mongoose.connection.close();
  process.exit();
});
