const dbConfig = require('../config/db.mongo.js');
const mongoose = require('mongoose');
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.productSchema = require('./productSchema.js')(mongoose);
db.categorySchema = require('./categorySchema.js')(mongoose);
module.exports = db;