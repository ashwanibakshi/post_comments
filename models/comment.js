const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    postId :{
        type : mongoose.Types.ObjectId,
        required:true,
        ref:'post'
    },
    message:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('comment',commentSchema);