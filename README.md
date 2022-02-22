# Backend-Authentication-_using_express-mongoose-and-see_post_after_authentication
Authentication by express and mongoose database for sign up and sign in and see post after authentication. Also post the user data in post 'user': {} by take ref from user. and get by using populate 'user'.

# ref:- take reference from collections using like below:
```js
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
```

# populate:- take the populate from schema like : -

```js
router.get("/", protect, async (req,res)=>{
    try{

        const posts = await Post.find({}).populate("user");
        return res.status(200).json({data: posts});
    }
    catch(err){
        return res.status(500).json({status: "failed", message: "Something went wrong!"});
    }
});
```

