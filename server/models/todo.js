var mongoose  = require('mongoose');




var Todo = mongoose.model('Todo', {   //creating mongoose model
  text: {
    type: String,
    required: true, //validators
    minlength: 1,
    trim:true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {
  Todo: Todo
}
