const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://helpjs19:12345@cluster0.zdcrg5i.mongodb.net/?retryWrites=true&w=majority' )
//, {useUnifiedTopology: true , useNewUrlParser: true}
    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose