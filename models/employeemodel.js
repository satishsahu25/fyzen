const mongoose= require('mongoose');

const employeeschema=new mongoose.Schema({
    empid:{
        type:Number,
        required:true,
    },
    contactno:{
        type:Number,
        required:true
    },
    firstname:{
        type:String,
        required:true,
        min:3
    },
    lastname:{
        type:String,
        required:true,
        min:3
    },
    emailid:{
        type:String,
        required:true,
    }
},{timestamps:true});

module.exports =mongoose.model("Employee",employeeschema);