const postModel = require('../models/Post');

module.exports = {
    addPost(data){
        return new Promise((resolve,reject)=>{
            try {
                 let postData = new postModel({
                     title     : data.title,
                     article   : data.article,
                     slug      : data.slug
                 })
                postData.save((err,pdata)=>{
                    if(err){
                        reject(err);
                    }
                    else{
                        resolve(pdata)
                    }
                })
            } catch (error) {
                reject(error)
            }
        });
    },
    postById(id){
         return new Promise((resolve,reject)=>{
             try {
                postModel.findById({"_id":id},(err,pdata)=>{
                     if(err){
                        reject(err)
                     }
                     else{
                        resolve(pdata)
                     }
                })
             } catch (error) {
                reject(error);
             } 
         })
    },
    listAllPost(){
        return new Promise((resolve,reject)=>{
             try {
                postModel.find((err,pdata)=>{
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(pdata)
                    }
                })
             } catch (error) {
                reject(error);
             }
        });
    }
}
