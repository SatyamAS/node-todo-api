const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '6b7475924812283cc3140b66';

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos',todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todos',todo);
});

Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo By Id',todo);
;}).catch((e)=> console.log(e));
