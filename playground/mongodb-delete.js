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

    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Todos').deleteOne({text:'Each Lunch'}).then((result) => {
    //   console.log(result);
    // });
    // db.collection('Todos').findOneAndDelet({completed:false}).then((result) => {
    //   console.log(result);
    // });
    // db.collection('Users').deleteMany({name:'Satyam'}).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b73d0206cbed922c0d2b8fc')}).then((result) => {
      console.log(result);
    });




    client.close();

});//for production it may be aws or heroku
