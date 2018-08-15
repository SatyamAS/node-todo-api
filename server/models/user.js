var mongoose  = require('mongoose');


var User = mongoose.model('User', {   //creating mongoose model
  email: {
    type: String,
    required: true, //validators
    minlength: 1,
    trim:true
  }
});

module.exports = {User}
