const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { Post } = require('../models/Post');
const { Group } = require('../models/Group');
const { User } = require('../models/User');
const mongoose = require('mongoose');

// ============================================
// req should contain following
  // email: author's email
  // content: content of post
  // caption: caption of post
  // group: group you want to post to
// ============================================
router.post("/createpost", auth, (req, res) => {
    //const now=new Date()
    const newPost = new Post({
        author: req.user,
        email: req.user.email,
        content: req.body.content,
        caption: req.body.caption,
        //timestamps:
    });
    newPost.save((err, obj) => {
        if (err) {
            console.log(err);
        } else {
            Group.findOne({
              name:req.user.email+'-home'})
            .then(doc=>{
              doc.posts.push(newPost._id)
              doc.save()
              .then(()=>{
                res.status(200).json({
                    message: "Done",
                    post: obj
                })
              })
            })
            .catch(err => {
              res.status(400).json({"err":err})
            })
        }
    });
});


// =====================================
// req should consist of the  group name for which the posts need to be fetched
//
router.post("/getposts", auth, (req, res) => {
  Group.findOne({
    'name':req.user.email + '-' + req.body.group,
  })
  .then(doc => {

    // console.log(doc); works
  Post.find().where('_id').in(doc.posts).exec((err, records) => {
    if (err) {
      throw err;
    }

    res.status(200).json(records)

  });

  })
  .catch(e=>{
    res.status(400).json({
      "err":e
    })
  })
})

module.exports = router;
