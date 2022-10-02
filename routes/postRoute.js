const express        = require('express');
const postController = require('../controllers/postController');
const router         = express.Router();


/**
 * @api {get} /post/showall           showAllPost          
 * @apiName  showAllPost          
 * @apiGroup blogpost
 * 
 * 
 * @apiPermission anyone
 * 
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
            "__v": 0
        },
        {
            "_id": "63394c5bffc8a658dbbe2af5",
            "title": "abcde abcde abcde abcde",
            "article": "demo",
            "slug": "abcde-abcde-abcde-abcde",
            "createdAt": "2022-10-02T08:30:38.485Z",
            "__v": 0
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
router.get('/showall',postController.showAllPost);


/**
 * @api {post} /post/add           addPost          
 * @apiName  addPost           
 * @apiGroup blogpost
 * 
 * 
 * @apiPermission anyone
 * 
 * @apiParam {String} title            title
 * @apiParam {String} article          article
 * @apiParam {String} slug             slug 
 * 
 * 
 * @apiSampleRequest off
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "data": {
        "title": "abcde abcde abcde abcde",
        "article": "demo",
        "slug": "abcde-abcde-abcde-abcde",
        "createdAt": "2022-10-02T08:30:38.485Z",
        "_id": "63394c5bffc8a658dbbe2af5",
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
router.post('/add',postController.addPost);

/**
 * @api {get} /post/:id            getPostById          
 * @apiName  getPostById           
 * @apiGroup blogpost
 * 
 * 
 * @apiPermission anyone
 * 
 * @apiParam {String} id            _id(63394bbefb1b5b1b54fc2be2)
 * 
 * 
 * @apiSampleRequest off
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "data": {
        "_id": "63394bbefb1b5b1b54fc2be2",
        "title": "abcd abcd abcd abcd",
        "article": "demo1",
        "slug": "abcd-abcd-abcd-abcd",
        "createdAt": "2022-10-02T08:28:29.207Z",
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
router.get('/:id',postController.getPostById);


module.exports = router;
