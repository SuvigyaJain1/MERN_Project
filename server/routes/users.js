const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    }).catch((err) => {
        console.log(err.message)
    })
});

router.post("/register", (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id, user: user.token
                    });
            });
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});


router.post("/addfollower", (req, res) => {
    User.findOne({ email: req.body.email }, (err, doc) => {

        if (err) return res.status(400).json({err:err.message})

        doc.followers.push(req.body.follower_email);
        doc.save()
        .then( () => {
            return res.status(200).json({
                success: req.body.follower_email
            })
        })


    })
})

router.post("/removefollower", (req, res) => {
    User.findOne({ email: req.body.email }, (err, doc) => {

        if (err) return res.status(400).json({err:err.message})

        doc.followers.pull(req.body.follower_email);
        doc.save()
        .then( () => {
            return res.status(200).json({
                success: req.body.follower_email
            })
        })


    })
})

module.exports = router;
