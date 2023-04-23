import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Subsidiary = sequelize.define("Sucursales", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  dirección: { type: DataTypes.STRING, allowNull: false },
  correo: { type: DataTypes.STRING, allowNull: false },
  departamento: { type: DataTypes.STRING, allowNull: false },
  municipio: { type: DataTypes.STRING, allowNull: false },
  teléfono: { type: DataTypes.STRING },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

export default Subsidiary;
