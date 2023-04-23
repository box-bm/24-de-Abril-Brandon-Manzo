import express from "express";
import dotenv from "dotenv";
import { createModels } from "./config/dbModels.js";
import { initConnection } from "./config/sequelize.js";
import router from "./api/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, async () => {
  await initConnection();
  await createModels();
  console.info("Running on port " + port);
});
