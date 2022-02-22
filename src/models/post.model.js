
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "authUsers",
        required: true
    }
},
{ timestamps: true }
);

const Post = mongoose.model("posts", postSchema);

module.exports = Post;