const { Router } = require("express");
require("dotenv").config();

const PostRoute = Router();
const { PostModel } = require("../Model/Post.model");

PostRoute.post("/posts", (req, res) => {
  const { content, likes } = req.body;
  const postData = new PostModel({
    content,
    likes,
  });
  postData.save();
  res.send("Successfully Post Data");
});

module.exports = {
  PostRoute,
};
