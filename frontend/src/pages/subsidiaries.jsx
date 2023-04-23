import columns from "../components/subsidiaries/tableColumns";
import BasePage from "../components/layout/admin";

const Subsidiaries = () => {
  return <><BasePage api="http://localhost:3000/api/subsidiaries" columns={columns} filterFunction={(data, filter) => data
    .filter((category) =>
      category.categoria.toString().toLowerCase().includes(filter.toLowerCase()) ||
      (category.descripcion ?? "").toString().toLowerCase().includes(filter.toLowerCase()))} /></>
}

export default Subsidiaries;