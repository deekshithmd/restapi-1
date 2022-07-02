const express = require("express");
const router = express.Router();

const Users = require("../models/users");

router.get("/", async (req, res) => {
  const userData = await Users.find();
  res.json(userData);
});

router.get("/:id", async (req, res) => {
  const userData = await Users.findById(req.params.id);
  res.json(userData);
});

router.post("/", async (req, res) => {
  const user = new Users({
    name: req.body.name,
    age: req.body.age,
  });
  try {
    const result = await user.save();
    res.json(result);
  } catch (error) {
    res.send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updated = await Users.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.json(updated);
  } catch (error) {
    res.send({ message: error });
  }
});

module.exports = router;
