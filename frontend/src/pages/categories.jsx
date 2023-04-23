import columns from "../components/categories/tableColumns";
import BasePage from "../components/layout/admin";

const Categories = () => {

  return (
    <>
      <BasePage api="/api/categories" columns={columns} filterFunction={(data, filter) => data
        .filter((category) =>
          category.categoria.toString().toLowerCase().includes(filter.toLowerCase()) ||
          (category.descripcion ?? "").toString().toLowerCase().includes(filter.toLowerCase()))} />
    </>
  );
}

export default Categories;