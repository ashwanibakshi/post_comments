const commentDb  = require('../db/commentDB');

module.exports = {
    addComment(req,res,next){
        commentDb.addComment(req.body)
        .then((data)=>{
            res.json({data:data})
        })
        .catch((err)=>{
            next(err)
        })
    },
    showAllCommentsByPostId(req,res,next){
       commentDb.showAllCommentsByPostId(req.params.id)
       .then((data)=>{
            res.json({data:data}) 
       })
       .catch((err)=>{
           next(err)
       })
    }
}