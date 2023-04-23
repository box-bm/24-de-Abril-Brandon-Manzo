import Category from "../models/category.js";
import Subsidiary from "../models/subsidiary.js";

export const createModels = async () => {
  try {
    await Category.sync();
    await Subsidiary.sync();
  } catch (error) {
    console.error(error);
  }
};
