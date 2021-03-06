const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");
require('../db/conn');
const User = require("../model/user");

router.get('/', (req, res) => {
    res.send(`Hii server this side`);
});

router.post('/signup', async (req, res) => {

    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the data" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Passwords are not matching" });
        }
        else {
            const user = new User({ name, email, password, cpassword });

            await user.save();
            res.status(201).json({ message: "user registered successfully" });
        }


    } catch (err) {
        console.log(err);

    }
});


router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // res.json({message: "awesome"});
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Invalid credintial" });
        }

        const userLogin = await User.findOne({ email: email });


        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "User error" });
            } else {

                res.json({ message: "User Signin successfully" });
            }


        } else {
            res.status(400).json({ error: "User error" });

        }


    } catch (err) {
        console.log(err);

    }
});
module.exports = router;


app.get('/about', authenticate, (req, res) => {
    const a = fs.readFileSync('about.html')
    res.send(a.toString());
})
