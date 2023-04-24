import Form from "../components/subsidiaries/form";
import columns from "../components/subsidiaries/tableColumns";
import BasePage from "../components/layout/basePage";
import { axiosInstance } from "../config/axios";
import { useFormik } from "formik";
import { useState } from "react";

const Subsidiaries = () => {
  const [isEditing, setIsEditing] = useState(false);

  const form = useFormik({
    initialValues: {
      id: "",
      nombre: "",
      direccion: "",
      correo: "",
      departamento: "",
      municipio: "",
      telefono: "",
    },
    onSubmit: async (values) => {
      if (isEditing) {
        await axiosInstance.put("/api/subsidiaries/" + values.id, {
          nombre: values.nombre,
          direccion: values.direccion,
          correo: values.correo,
          departamento: values.departamento,
          municipio: values.municipio,
          telefono: Number(values.telefono),
        });
      } else {
        await axiosInstance.post("/api/subsidiaries", {
          nombre: values.nombre,
          direccion: values.direccion,
          correo: values.correo,
          departamento: values.departamento,
          municipio: values.municipio,
          telefono: Number(values.telefono),
        });
      }
      onCloseModal();
    }
  });

  const onSelectedItem = (values) => {
    setIsEditing(true)
    form.setValues({ ...values, id: values.id })
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
        api="/api/subsidiaries"
        fileName={"Sucursales"}
        columns={columns}
        filterFunction={(data, filter) => data
          .filter((subsidiary) =>
            (subsidiary.nombre ?? "").toString().toLowerCase().includes(filter.toLowerCase()) ||
            (subsidiary.direccion ?? "").toString().toLowerCase().includes(filter.toLowerCase()) ||
            (subsidiary.correo ?? "").toString().toLowerCase().includes(filter.toLowerCase()) ||
            (subsidiary.departamento ?? "").toString().toLowerCase().includes(filter.toLowerCase()) ||
            (subsidiary.municipio ?? "").toString().toLowerCase().includes(filter.toLowerCase()) ||
            (subsidiary.telefono ?? "").toString().toLowerCase().includes(filter.toLowerCase())
          )} s />
    </>
  );
}

export default Subsidiaries;