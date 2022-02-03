const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = "HemantakaFirefist"
//ROUTE 1 : Create a user using POST "api/auth/createuser". Doesn't require authentication
router.post('/createuser', [
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must contain atleast 5 characters').isLength({ min: 5 }),

], async (req, res) => {
    // Return bad request and errors if found any
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // res.send(req.body)
    // Check whether the user with this email already exists
    try {
        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt)
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        console.log(data);
        res.json({ authtoken })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})
// ROUTE2 : Authenticate  a user using POST "api/auth/login". No login required.
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', "Password cannot be blank").exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials." })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials." })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        console.log(data);
        res.json({ authtoken })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 3 : Get logged in user details using POST : "/api/auth/getuser". Login required
router.post('/getuser',fetchuser, [
    body('email', 'Enter a valid email').isEmail(),


], async (req, res) => {

    try {
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router
