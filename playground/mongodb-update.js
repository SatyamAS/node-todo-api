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

    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b7400351b0c021d5f5423e1')},{
    //   $set: {completed:true}
    // },{returnOriginal: false}).then((result) => {
    //   console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({name:'Carnage'},{
      $set: {name:'Satyam'},$inc: {age:10}
    },{returnOriginal: false}).then((result) => {
      console.log(result);
    })


    client.close();

});//for production it may be aws or heroku
