import Form from "../components/subsidiaries/form";
import columns from "../components/subsidiaries/tableColumns";
import BasePage from "../components/layout/admin";
import { useFormik } from "formik";

const Subsidiaries = () => {

  const form = useFormik({
    initialValues: {
      categoria: "",
      descripcion: ""
    },
    onSubmit: (values) => {
      console.log(values);
      onCloseModal();
    }
  });

  const onSelectedItem = (values) => {
    form.setValues(values);
  }
  const onCloseModal = () => {
    form.resetForm();
  }

  return (
    <>
      <BasePage
        modalForm={<Form form={form} />}
        onSelectedRow={onSelectedItem}
        onCloseModal={onCloseModal}
        onPressSave={form.submitForm}
        api="/api/subsidiaries"
        columns={columns}
        filterFunction={(data, filter) => data
          .filter((category) =>
            category.categoria.toString().toLowerCase().includes(filter.toLowerCase()) ||
            (category.descripcion ?? "").toString().toLowerCase().includes(filter.toLowerCase()))} />
    </>
  );
}

export default Subsidiaries;