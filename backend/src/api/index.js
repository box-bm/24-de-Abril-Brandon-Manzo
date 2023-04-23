import express from "express";
import subsidiariesApi from "./subsidiaries.js";
import categoriesApi from "./categories.js";

const router = express.Router();

router.use("/categories", categoriesApi);
router.use("/subsidiaries", subsidiariesApi);

export default router;
