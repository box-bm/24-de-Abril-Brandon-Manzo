import express from "express";
import Subsidiary from "../models/subsidiary.js";

const router = express.Router();

// base path: "/api/subsidiaries"
// sucursales
router.get("/", async (req, res) => {
  res.json(await Subsidiary.findAll());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const subsidiary = await Subsidiary.findByPk(id);
  if (!subsidiary) {
    return res.status(404).send("Subsidiary not found");
  }

  res.json(subsidiary);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const subsidiary = await Subsidiary.findByPk(id);
  if (!subsidiary) {
    return res.status(404).send("Subsidiary not found");
  }
  await subsidiary.update(data);
  res.json(createdCategory);
});

router.post("", async (req, res) => {
  const subsidiary = req.body;
  const createdCategory = await Subsidiary.create(subsidiary);
  res.json(createdCategory);
});

router.put("/:id/disactivate", async (req, res) => {
  const { id } = req.params;
  const category = await Subsidiary.findByPk(id);
  if (!category) {
    return res.status(404).send("Subsidiary not found");
  }
  res.json(createdCategory);
});

export default router;
