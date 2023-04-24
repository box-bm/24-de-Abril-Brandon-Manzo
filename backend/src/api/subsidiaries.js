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
  subsidiary.nombre = data.nombre;
  subsidiary.direccion = data.direccion;
  subsidiary.correo = data.correo;
  subsidiary.departamento = data.departamento;
  subsidiary.municipio = data.municipio;
  subsidiary.telefono = data.telefono;
  await subsidiary.save();
  res.json(subsidiary);
});

router.post("", async (req, res) => {
  const subsidiary = req.body;
  const createdCategory = await Subsidiary.create(subsidiary);
  res.json(createdCategory);
});

router.put("/:id/disactivate", async (req, res) => {
  const { id } = req.params;
  const subsidiary = await Subsidiary.findByPk(id);
  if (!subsidiary) {
    return res.status(404).send("Subsidiary not found");
  }
  subsidiary.activo = !subsidiary.activo;
  await subsidiary.save();
  res.json(subsidiary);
});

export default router;
