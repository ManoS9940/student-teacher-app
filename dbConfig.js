const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const dbName="StudTeach-Mgmt";
const dbUrl = `mongodb+srv://Mano9940:Dan09940@cluster0.eurlw.mongodb.net/${dbName}`;


module.exports={dbUrl,dbName,mongodb,MongoClient};