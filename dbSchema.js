const mongoose = require('mongoose');
const validator = require('validator');

var teacherSchema = new mongoose.Schema({
    firstName:{type:'string',required:true},
    lastName:{type:'string',required:true},
    mobile:{type:"Number",required:true,default:'000-000-0000'},
    email:{type:'string',required:true,lowecase:true,validate:(value)=>{
        return validator.isEmail(value)
    }},
    teach_id:{type:'string',default:null},
    createdAt:{type:Date,default:Date.now()}
})

var studentSchema = new mongoose.Schema({
    firstName:{type:'string',required:true},
    lastName:{type:'string',required:true},
    mobile:{type:"Number",required:true,default:'000-000-0000'},
    email:{type:'string',required:true,lowecase:true,validate:(value)=>{
        return validator.isEmail(value)
    }},
    location:{type:'string',default:null},
    teacher_id:{type:'string',default:null},
    createdAt:{type:Date,default:Date.now()}
})

var teacherModel = mongoose.model('teacher', teacherSchema);
var studentModel = mongoose.model('student', studentSchema);

module.exports={teacherModel,studentModel,mongoose}