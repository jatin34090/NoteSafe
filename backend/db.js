const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const mongoURI = "mongodb://0.0.0.0:27017/NoteSafe"

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connectrd to Mongo Successfully")
    })


   
}


module.exports = connectToMongo;