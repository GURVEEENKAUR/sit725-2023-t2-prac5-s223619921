let client = require('../dbConnection'); 

let Collection = client.db().collection('cats');

function postCat(cat, callback){
    collection.insertOne(cat, callback);
}

function getAllCats(callback){
    collection.find({}).toArray(callback);
}

module.exports = {postCat,getAllCats} 