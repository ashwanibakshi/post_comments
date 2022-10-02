const postDb = require('../db/postDB');
const { post } = require('../routes/postRoute');


module.exports = {
    addPost(req,res,next){
         postDb.addPost(req.body)
         .then((data)=>{
            res.json({data:data});
         })
         .catch((err)=>{
            next(err);
         })
    },
    getPostById(req,res,next){
        postDb.postById(req.params.id)
        .then((data)=>{
            res.json({data:data});
         })
         .catch((err)=>{
            next(err);
         })
    },
    showAllPost(req,res,next){
        postDb.listAllPost()
        .then((data)=>{
            res.json({data:data});
         })
         .catch((err)=>{
            next(err);
         })
    }
}