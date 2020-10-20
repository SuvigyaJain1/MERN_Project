const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const mongoose = require('mongoose');
const { Group } = require('../models/Group');


router.post("/creategroup", auth, (req, res) => {
    const { name } = req.body;
    if (name == null) {
        res.json({
            error: "Enter Group Name"
        })
        return;
    }
    const newGroup = new Group({
        name,
        createdBy: req.user,
        members: [req.user],
        admins: [req.user]
    });
    newGroup.save((err, obj) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({
                message: "Done",
                group: obj
            })
        }
    });
});

//TODO testing using postman after posts are enabled
router.post("/addpost", auth, (req, res) => {
    const { group, post } = req.body;
    Group.findOneAndUpdate({ _id: group._id }, { $push: { 'posts': post } }, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ message: "Post added successfully", doc });
        }
    })
});

//TODO testing using postman after posts can be deleted
//This route DOES NOT delete the post in itself. It removes the post reference from Group.
//Has to be called before deleting the post in postroute
router.post("/deletepost", auth, (req, res) => {
    const { group, post } = req.body;
    Group.findOneAndUpdate({ _id: group._id }, { $pull: { 'posts': post } }, (err, doc) => { //Might throw errors.
        if (err) {
            console.log(err);
        } else {
            res.json({ message: "Post deleted successfully", doc });
        }
    })
})

module.exports = router;