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
    var db = client.db('TodoApp')
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:'false'
    // },(err,result) => {
    //   if(err){
    //     return console.log('Unable to insert todo',err);
    //   }else{
    //     console.log(JSON.stringify(result.ops, undefined,2));//ops stores all docs that have benn inserted
    //   }
    //
    // })

    db.collection('Users').insertOne({
      name:'Satyam',
      age:22,
      location:'Bengaluru'
    },(err,result) => {
      if(err){
         console.log('Unable to insert todo',err);
      }else{
         console.log(result.ops[0]._id.getTimestamp());//ops stores all docs that have benn inserted
        }
    })


    client.close();

});//for production it may be aws or heroku
