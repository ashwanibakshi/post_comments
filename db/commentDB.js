const commentModel = require('../models/comment');
const postModel    = require('../models/Post');
const mongoose     = require('mongoose');

module.exports = {
    addComment(data){
        return new Promise((resolve,reject)=>{
            try {
                let commentData = new commentModel({
                      postId  : data.postid,
                      message : data.message
                })
                commentData.save((err,cdata)=>{
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(cdata)
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    },
    showAllCommentsByPostId(postId){
         return new Promise((resolve,reject)=>{
            try {
              postModel.aggregate([
                {
                    $match : {"_id":mongoose.Types.ObjectId(postId)}
                },
                {
                    $lookup:{
                        from:'comments',
                        localField:'_id',
                        foreignField: 'postId',
                        as : "postComments"
                    }
                }
              ],(err,cdata)=>{
                      resolve(cdata)
              })
            } catch (error) {
                reject(error)
            }
         })
    }
}