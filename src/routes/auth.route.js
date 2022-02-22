

const express= require('express');
const { signup,signin } = require('../controllers/auth.controller');
const router = express.Router();
const {getAuthUsers} = require('../controllers/user.controller');
const validateSignUp = require("../validations/signup.validate");
const validateSignIn = require("../validations/signin.validate");
const protect = require('../middlewares/protect');

router.post("/signup", ...validateSignUp(),signup)
router.post("/signin", ...validateSignIn(),signin)

router.get("/users", protect, getAuthUsers);


module.exports = router;