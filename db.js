const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


 let db = null;
// Connection URL
const url = 'mongodb://cliff1983:Brotherhood12@cluster0-shard-00-00-egxri.mongodb.net:27017,cluster0-shard-00-01-egxri.mongodb.net:27017,cluster0-shard-00-02-egxri.mongodb.net:27017/JiyuDev?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

// Database Name
const dbName = 'JiyuDev';

exports.getClient = async ()=>{
  return new  Promise((resolve,reject) => {

  if(!db){
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to mongodb");
  db = client.db(dbName);
resolve(db)
});
      }else{
 return resolve(db);
      }
  })
}
exports.close = ()=>{
  client.close();
}
