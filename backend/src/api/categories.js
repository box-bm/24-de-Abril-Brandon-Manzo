import express from "express";
import Category from "../models/category.js";

const router = express.Router();

// base path: "/api/categories"
// categorias
router.get("/", async (req, res) => {
  res.json(await Category.findAll());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByPk(id);
  if (!category) {
    return res.status(404).send("Category not found");
  }

  res.json(category);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const category = await Category.findByPk(id);
  if (!category) {
    return res.status(404).send("Category not found");
  }
  await category.update(data);
  res.json(createdCategory);
});

router.post("/", async (req, res) => {
  const category = req.body;
  const createdCategory = await Category.create(category);
  res.json(createdCategory);
});

router.put("/:id/disactivate", async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByPk(id);
  if (!category) {
    return res.status(404).send("Category not found");
  }
  res.json(createdCategory);
});

export default router;
