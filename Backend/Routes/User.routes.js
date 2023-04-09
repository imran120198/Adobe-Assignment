const { Router } = require("express");
require("dotenv").config();

const UserRoute = Router();
const { UserModel } = require("../Model/User.model");


//Create a new user.
UserRoute.post("/users", async (req, res) => {
  try {
    const { name, email, bio } = req.body;
    const user = new UserModel({ name, email, bio });
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ message: err.message });
    console.log({ message: err.message });
  }
});

//Retrieve a user by id.
UserRoute.get("/users/:id", async (req, res) => {
  try {
    const userData = await UserModel.findById(req.params.id);
    if (userData) {
      res.status(201).send(userData);
    } else {
      res.status(400).send("User Not Found");
    }
  } catch (err) {
    console.log({ message: err.message });
  }
});

// //Update a user's name or bio by id.
// UserRoute.put("/users/:id", async(req,res) => {
//     try{

//     }
//     catch(err){
//         console.log({message: err.message})
//     }
// })

module.exports = {
  UserRoute,
};
