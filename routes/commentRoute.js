const express            = require('express');
const commentController  = require('../controllers/commentController');
const router             = express.Router();


/**
 * @api {post} /comment/add            addComment          
 * @apiName  addComment           
 * @apiGroup comment
 * 
 * 
 * @apiPermission anyone
 * 
 * @apiParam {String} postid            postId(_id)
 * @apiParam {String} message           comment
 * 
 * 
 * @apiSampleRequest off
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "data": {
        "postId": "63394bbefb1b5b1b54fc2be2",
        "message": "its a demo comment2",
        "createdAt": "2022-10-02T08:54:31.013Z",
        "_id": "633952466b561575714a3aec",
        "__v": 0
    }
}
 *
 * 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": ""
 *     }
 */
router.post('/add',commentController.addComment);


/**
 * @api {get} /comment/post/:id            getPostComments          
 * @apiName  getPostComments            
 * @apiGroup comment
 * 
 * 
 * @apiPermission anyone
 * 
 * @apiParam {String} id            postId(_id)
 * 
 * 
 * @apiSampleRequest off
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "data": [
        {
            "_id": "63394bbefb1b5b1b54fc2be2",
            "title": "abcd abcd abcd abcd",
            "article": "demo1",
            "slug": "abcd-abcd-abcd-abcd",
            "createdAt": "2022-10-02T08:28:29.207Z",
            "__v": 0,
            "postComments": [
                {
                    "_id": "6339522f6b561575714a3ae9",
                    "postId": "63394bbefb1b5b1b54fc2be2",
                    "message": "its a demo comment",
                    "createdAt": "2022-10-02T08:54:31.013Z",
                    "__v": 0
                },
                {
                    "_id": "633952466b561575714a3aec",
                    "postId": "63394bbefb1b5b1b54fc2be2",
                    "message": "its a demo comment2",
                    "createdAt": "2022-10-02T08:54:31.013Z",
                    "__v": 0
                }
            ]
        }
    ]
}
 *
 * 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": ""
 *     }
 */
router.get('/post/:id',commentController.showAllCommentsByPostId);

module.exports = router;