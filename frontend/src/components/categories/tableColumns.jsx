import moment from "moment";
import Switch from '@mui/material/Switch';

export default [
  { headerName: "Categoría", field: "categoria", minWidth: 160, maxWidth: 500 },
  {
    headerName: "Descripcion",
    field: "descripcion",
    minWidth: 300,
    maxWidth: 500,
  },
  {
    headerName: "Fecha de Creacion",
    field: "createdAt",
    valueFormatter: (value) => moment(value).format("DD/MM/YYYY"),
    width: 150,
  },
  {
    headerName: "Fecha de Modificación",
    field: "updatedAt",
    valueFormatter: (value) => moment(value).format("DD/MM/YYYY"),
    width: 150,
  },
  {
    headerName: "Activo",
    field: "activo",
    renderCell: (row) => {
      return (
        <Switch
          defaultChecked={row.value}
          onChange={async () => await fetch(`http://localhost:3000/api/categories/${row.id}/disactivate`, { method: "put" })}
        />
      )
    },
  },
];
