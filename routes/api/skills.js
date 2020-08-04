const express = require("express");
const router = express.Router();

let skills = require("../../data/dummy.js");

router.get("/list", async(req,res) => {
  try {
    res.status(200).json({
      data: skills
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occurred",
      err
    });
  }
});

router.get("/list/:id", async (req,res) => {
  let {id} = req.params;
  id = Number(id);

  try {
    let skill = skills.find(skill => skill._id === id);
    res.status(200).json({
      data: skill
    });
  } catch {
    res.status(400).json({
      message: "Some error ocurred",
      err
    });
  }
});

module.exports = router;
