const { Router } = require("express");
require("dotenv").config();

const PostRoute = Router();
const { PostModel } = require("../Model/Post.model");

//Create a new post.
PostRoute.post("/posts", async (req, res) => {
  try {
    const { user_id, content, likes } = req.body;
    const postData = new PostModel({
      user_id,
      content,
      likes,
    });
    await postData.save();
    res.status(201).send({ message: "New Data Posted" });
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

//Retrieve a post by id.
PostRoute.get("/posts/:id", async (req, res) => {
  try {
    const postData = await PostModel.findById(req.params.id);
    if (!postData) {
      res.status(500).send({ message: "Posts not found" });
    } else {
      res.status(201).send({ message: postData });
    }
  } catch (err) {
    res.status(500).send({ message: "Error in finding post data" });
  }
});

module.exports = {
  PostRoute,
};
