
const express = require('express');
const app = express();
const cors= require('cors');

const connect = require("./config/db");

const authRouter = require("./routes/auth.route");
const postRouter = require("./routes/post.route");

app.use(cors());
app.use(express.json());

app.use("/auth",authRouter);

app.use("/posts", postRouter);

const start = async ()=>{
    await connect();

    app.listen(5000,()=>{
        console.log("Listen on port 5000");
    })
}

module.exports = start;