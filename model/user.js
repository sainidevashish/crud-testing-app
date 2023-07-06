const mongoose = require('mongoose');
const newSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true
        },
        age:{
            type:Number,
            required:true
        }
    }
);

const user = new mongoose.model('user_testing', newSchema);
module.exports = user;