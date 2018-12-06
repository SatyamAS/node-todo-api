var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb')



var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;//for deploying in heroku

app.use(bodyParser.json());

app.post('/todos',(req,res) => {  //post method
  //console.log(req.body);    //body gets stored by body praser
  var todo = new Todo ({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});
 //we need to send json to our express application

app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  },(e) => {
    res.status(404).send(e);
  });
});

app.get('/todos/:id',(req,res)=> {
  var id = req.params.id;
  //res.send(req.params);
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});

  }).catch((e) => {
    res.status(400).send();
  })

});

app.listen(port, () => {
  console.log(`Started server at port ${port}`);
});

module.exports = {app};

  // // var newTodo = new Todo({
  // //   text:'Cook Dinner'
  // // });
  // //
  // //   newTodo.save().then((doc) => {
  // //     console.log('Saved Todo',doc);
  // //   }, (e) => {
  // //     console.log('Unable to save Todo');
  // //   }) //responsible saving to moongo database
  //
  //   var newTodo1 = new Todo({
  //     text:'  Edit this video   '
  //     // text:'Buy Milk',
  //     // completed:true,
  //     // completedAt:123
  //   });
  //
  //   // newTodo1.save().then((doc) => {
  //   //   console.log(JSON.stringify(doc,undefined,2));
  //   // },(e) => {
  //   //   console.log('Unable to save Todo');
  //   // });
  //
  //   //user model
  //   //email,require,trim,type string,minlength of 1
  //
  //
  //   var user1 = new User({
  //     email:'satyaphoenix1891@gmail.com'
  //   });
  //
  //   user1.save().then((doc) => {
  //     console.log(JSON.stringify(doc,undefined,2));
  //   },(e) => {
  //     console.log('Unable to connect to DB');
  //   })
