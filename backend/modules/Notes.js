const mongoose = require('mongoose')
const { Schema } = mongoose;

// Schema = mongoose.Schema();

const NotesSchema = new Schema({
title:{
    type:String,
    requried:true
},
description:{
    type:String,
    requried:true
},
tag:{
    type:String,
    default:"general"
},
date:{
    type:Date,
    default:Date.now
}
});

module.exports  =mongoose.model('notes',NotesSchema )