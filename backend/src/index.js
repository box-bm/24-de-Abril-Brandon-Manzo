import express from "express";
import dotenv from "dotenv";
import { createModels } from "./config/dbModels.js";
import { initConnection } from "./config/sequelize.js";
import Category from "./models/category.js";
import Subsidiary from "./models/subsidiary.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, async () => {
  await initConnection();
  await createModels();
});

// categorias
app.get("/categories", async (req, res) => {
  res.json(await Category.findAll());
});

app.get("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByPk(id);
  if (!category) {
    return res.status(404).send("Category not found");
  }

  res.json(category);
});

app.put("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const category = await Category.findByPk(id);
  if (!category) {
    return res.status(404).send("Category not found");
  }
  await category.update(data);
  res.json(createdCategory);
});

app.post("/categories", async (req, res) => {
  const category = req.body;
  const createdCategory = await Category.create(category);
  res.json(createdCategory);
});

app.put("/categories/:id/disactivate", async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByPk(id);
  if (!category) {
    return res.status(404).send("Category not found");
  }
  res.json(createdCategory);
});

// sucursales
app.get("/subsidiaries", async (req, res) => {
  res.json(await Subsidiary.findAll());
});

app.get("/subsidiaries/:id", async (req, res) => {
  const { id } = req.params;
  const subsidiary = await Subsidiary.findByPk(id);
  if (!subsidiary) {
    return res.status(404).send("Subsidiary not found");
  }

  res.json(subsidiary);
});

app.put("/subsidiaries/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const subsidiary = await Subsidiary.findByPk(id);
  if (!subsidiary) {
    return res.status(404).send("Subsidiary not found");
  }
  await subsidiary.update(data);
  res.json(createdCategory);
});

app.post("/subsidiaries", async (req, res) => {
  const subsidiary = req.body;
  const createdCategory = await Subsidiary.create(subsidiary);
  res.json(createdCategory);
});

app.put("/subsidiaries/:id/disactivate", async (req, res) => {
  const { id } = req.params;
  const category = await Subsidiary.findByPk(id);
  if (!category) {
    return res.status(404).send("Subsidiary not found");
  }
  res.json(createdCategory);
});
