const mongoose = require('mongoose')
const { Schema } = mongoose;


// Schema = mongoose.Schema();

const UserSchema = new Schema({
name:{
    type:String,
    requried:true
},
email:{
    type:String,
    requried:true,
    unique:true
},
password:{
    type:String,
    requried:true
},
date:{
    type:Date,
    default:Date.now
}
});
User =mongoose.model('user',UserSchema );
// User.createIndexes()
module.exports  =User;