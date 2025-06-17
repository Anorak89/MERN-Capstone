const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcrypt"); 
const loginRouter = require("express").Router();
const User = require("../models/user");
require("dotenv").config()

loginRouter.post("/", async (request, response) => {
  const { username, password } = request.body;

  const user = await User.findOne({ username }); 
  const passwordCheck = user !== null ? await bcrypt.compare(password, user.passwordHash) : false;
  if (!(user && passwordCheck)) {
    return response.status(401).json({
      error: "invalid credentials",
    });
  }
  const userInfoForTokenCreation = {
    username: user.username,
    id: user._id,
  };
  const token = jwt.sign(userInfoForTokenCreation, process.env.JWT_SECRET);

  response
    .status(200)
    .send({ token, username: user.username, name: user.name });
});

module.exports = loginRouter;
