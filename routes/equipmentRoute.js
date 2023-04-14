const express = require("express");
const router = express.Router();
const Equipment = require("../models/equipmentModel");

router.get("/getallequipments", async (req, res) => {
  try {
    const equipments = await Equipment.find();
    res.send(equipments);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addequipment", async (req, res) => {
  try {
    const newequipment = new Equipment(req.body);
    await newequipment.save();
    res.send("Equipment added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editequipment", async (req, res) => {
  try {
    const equipment = await Equipment.findOne({ _id: req.body._id });
    equipment.name = req.body.name;
    equipment.image = req.body.image;
    equipment.fuelType = req.body.fuelType;
    equipment.rentPerHour = req.body.rentPerHour;
    equipment.capacity = req.body.capacity;

    await equipment.save();

    res.send("Equipment details updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.delete("/deleteequipment/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await Equipment.deleteOne({ _id: req.params.id });

    res.send("Equipment deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
