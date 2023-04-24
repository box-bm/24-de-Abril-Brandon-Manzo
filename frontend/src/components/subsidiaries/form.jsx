import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const Form = (props) => {
  const { form } = props;

  return (
    <form onSubmit={form.handleSubmit}>
      <TextField
        fullWidth id="categoria"
        name="categoria"
        label="Categoria"
        onChange={form.handleChange}
        error={form.touched.categoria && Boolean(form.errors.categoria)}
        helperText={form.touched.categoria && form.errors.categoria}
        value={form.values.categoria} />
      <TextField
        fullWidth
        id="descripcion"
        name="descripcion"
        label="Descripcion"
        onChange={form.handleChange}
        error={form.touched.descripcion && Boolean(form.errors.descripcion)}
        helperText={form.touched.descripcion && form.errors.descripcion}
        value={form.values.descripcion} />
    </form>
  );
}

Form.propTypes = {
  form: PropTypes.object
}

export default Form;