import moment from "moment";
import Switch from '@mui/material/Switch';

export default [
  { headerName: "Nombre", field: "nombre", minWidth: 160, maxWidth: 500 },
  { headerName: "Dirección", field: "dirección", minWidth: 160, maxWidth: 500 },
  { headerName: "Correo", field: "correo", minWidth: 160, maxWidth: 500 },
  { headerName: "Departamento", field: "departamento", minWidth: 160, maxWidth: 500 },
  { headerName: "Municipio", field: "municipio", minWidth: 160, maxWidth: 500 },
  { headerName: "Teléfono", field: "teléfono", minWidth: 160, maxWidth: 500 },
  {
    headerName: "Fecha de Creacion",
    field: "createdAt",
    valueFormatter: (value) => moment(value).format("DD/MM/YYY"),
    width: 150,
  },
  {
    headerName: "Fecha de Modificació",
    field: "updatedAt",
    valueFormatter: (value) => moment(value).format("DD/MM/YYY"),
    width: 150,
  },
  {
    headerName: "Activo",
    field: "activo",
    renderCell: (value) => (
      <Switch
        defaultChecked={value}
        onChange={(value) => console.log(value.target.value)}
      />
    ),
  },
];
