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

module.exports = {
  PostRoute,
};
