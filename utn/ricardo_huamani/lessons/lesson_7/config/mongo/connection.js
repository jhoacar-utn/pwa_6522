const { MongoClient } = require("mongodb");

const {mongo} = require("../config");

const connectionString = mongo.MONGO_URI;

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {

  connectToServer: function (callback) {
    
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("ricardo_huamani");
      
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  
    },

  getDb: function () {
    return dbConnection;
  },
};