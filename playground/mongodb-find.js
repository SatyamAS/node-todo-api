// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');//destructuring and pullingoff its properties

// var obj = new ObjectID();
// console.log(obj);
// var user = {name:'Satya',age:22};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) {
      console.log('Unable to connect to Mongo DB server');
    }else{
      console.log('Connected to Mongo DB server');
    }
    var db = client.db('TodoApp');

    // db.collection('Todos').find({ _id : new ObjectID('5b73f18b1b0c021d5f5421e2')}).toArray().then((docs) => { //toArray returns a promise!
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined,2));
    //
    // },(err) => {
    //   console.log(('unable to fetch',err));
    // })



    db.collection('users').find({ name:'Satyam'}).toArray().then((docs) => { //toArray returns a promise!
      console.log('todos');
      console.log(JSON.stringify(docs,undefin   ed,2));

    },(err) => {
      console.log(('unable to fetch',err));
    })





    client.close();

});//for production it may be aws or heroku
