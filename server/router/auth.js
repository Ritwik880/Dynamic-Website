const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/user");

router.get('/', (req, res) => {
    res.send(`Hii server this side`);
});

router.post('/signup', (req, res) => {

    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the data" });
    }
    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "Email already exits" });

            }
            const user = new User({ name, email, password, cpassword });

            user.save().then(() => {
                res.status(201).json({ message: "user signedup successfully" });
            }).catch((err => res.status(500).json({ error: "Failed to sign up" })));
        }).catch(err => { console.log(err); });

});

module.exports = router;