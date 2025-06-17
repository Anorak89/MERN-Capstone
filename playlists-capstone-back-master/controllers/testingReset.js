const testingResetRouter = require("express").Router();
const Playlist = require("../models/playlist");
const User = require("../models/user");

testingResetRouter.post("/reset-test-db", async (req, res) => {
  try {
    await Playlist.deleteMany({});
    await User.deleteMany({});
    res.status(200).json({ message: "Testing db reset successfully." });
  } catch (error) {
    res.status(500).json({ error: "Testing db reset failed." });
  }
});

module.exports = testingResetRouter;
