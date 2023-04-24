import Form from "../components/categories/form";
import columns from "../components/categories/tableColumns";
import BasePage from "../components/layout/basePage";
import { useFormik } from "formik";
import { axiosInstance } from "../config/axios";
import { useState } from "react";

const Categories = () => {
  const [isEditing, setIsEditing] = useState(false);

  const form = useFormik({
    initialValues: {
      id: "",
      categoria: "",
      descripcion: "",
    },
    onSubmit: async (values) => {
      if (isEditing) {
        console.log("Entra al update");
        await axiosInstance.put("/api/categories/" + values.id, { categoria: values.categoria, descripcion: values.descripcion });
      } else {
        console.log("Entra al create");
        await axiosInstance.post("/api/categories", { categoria: values.categoria, descripcion: values.descripcion });
      }
      onCloseModal();
    }
  });

  const onSelectedItem = (values) => {
    setIsEditing(true)
    form.setValues({ categoria: values.categoria, descripcion: values.descripcion, id: values.id })
  }

  const onCloseModal = () => {
    form.resetForm();
    setIsEditing(false);
  }

  return (
    <>
      <BasePage
        modalForm={<Form form={form} />}
        onSelectedRow={onSelectedItem}
        onCloseModal={onCloseModal}
        onPressSave={form.submitForm}
        resetForm={form.resetForm}
        api="/api/categories"
        fileName={"Categorias"}
        columns={columns}
        filterFunction={(data, filter) => data
          .filter((category) =>
            category.categoria.toString().toLowerCase().includes(filter.toLowerCase()) ||
            (category.descripcion ?? "").toString().toLowerCase().includes(filter.toLowerCase()))} />
    </>
  );
}

export default Categories;