// all mongoose configurations
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODM_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose: mongoose
};
