const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
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

module.exports = router;