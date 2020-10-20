const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { Post } = require('../models/Post');


router.post("/createpost", auth, (req, res) => {
    //const now=new Date()
    const newPost = new Post({
        author: req.user,
        content: req.body.content,
        caption: req.body.caption,
        //timestamps:
    });
    newPost.save((err, obj) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({
                message: "Done",
                post: obj
            })
        }
    });
});

module.exports = router;