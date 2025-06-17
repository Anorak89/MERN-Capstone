require("dotenv").config();

const config = {
  dbUrl: process.env.MONGODB_URI, 
  port: process.env.PORT || 3003,
};

module.exports = config;