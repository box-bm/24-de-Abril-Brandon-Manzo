import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Category = sequelize.define("Categorias", {
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: DataTypes.STRING,
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

export default Category;
