
const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

const protect = require("../middlewares/protect");

router.post("/", async(req,res)=>{
    try{
          const post = await Post.create(req.body);
          return res.status(201).json({data: post});
    }
    catch(err){
        return res.status(500).json({status: "failed", message: "Something went wrong!"});
    }

})

router.get("/", protect, async (req,res)=>{
    try{

        const posts = await Post.find({}).populate("user");
        return res.status(200).json({data: posts});
    }
    catch(err){
        return res.status(500).json({status: "failed", message: "Something went wrong!"});
    }
});

// Fetch a Single Post By Id
router.get("/:id", protect, async (req,res)=>{
    try{

        const post = await Post.findById(req.params.id).populate("user");
        res.status(200).json({data: post});
    }
    catch(err)
    {
        return res.status(500).json({status: "failed", message: "Something went wrong!"});
    }
});

module.exports = router;