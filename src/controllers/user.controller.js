
const express = require("express");
const router = express.Router();

const User = require('../models/user.model');

// const protect = require("../middlewares/protect");

const getAuthUsers= async (req,res)=>{

    const users = await User.find({}).select("-password");

    return res.status(200).json({data: users})
}

module.exports = { getAuthUsers};