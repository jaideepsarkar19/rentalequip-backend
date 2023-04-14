const mongoose = require("mongoose");
//adding schema for admin functions
const equipmentSchema = new mongoose.Schema({

    name : {type : String , required : true} ,
    image : {type : String , required : true} , 
    capacity : {type : Number  , required : true},
    Type : {type : String , required : true} , 
    bookedTimeSlots : [
        {
            from : {type : String , required : true},
            to : {type : String , required : true}
        }
    ] , 

    rentPerHour : {type : Number , required : true}


}, {timestamps : true}

)
const equipmentModel = mongoose.model('equipments' , equipmentSchema)
module.exports = equipmentModel