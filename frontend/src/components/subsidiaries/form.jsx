import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const Form = (props) => {
  const { form } = props;

  return (
    <form onSubmit={form.handleSubmit}>
      <TextField
        fullWidth
        id="nombre"
        name="nombre"
        label="Nombre"
        onChange={form.handleChange}
        error={form.touched.nombre && Boolean(form.errors.nombre)}
        helperText={form.touched.nombre && form.errors.nombre}
        value={form.values.nombre} />
      <TextField
        fullWidth
        id="direccion"
        name="direccion"
        label="Dirección"
        onChange={form.handleChange}
        error={form.touched.direccion && Boolean(form.errors.direccion)}
        helperText={form.touched.direccion && form.errors.direccion}
        value={form.values.direccion} />
      <TextField
        fullWidth
        id="correo"
        name="correo"
        label="Correo"
        onChange={form.handleChange}
        error={form.touched.correo && Boolean(form.errors.correo)}
        helperText={form.touched.correo && form.errors.correo}
        value={form.values.correo} />
      <TextField
        fullWidth
        id="departamento"
        name="departamento"
        label="Departamento"
        onChange={form.handleChange}
        error={form.touched.departamento && Boolean(form.errors.departamento)}
        helperText={form.touched.departamento && form.errors.departamento}
        value={form.values.departamento} />
      <TextField
        fullWidth
        id="municipio"
        name="municipio"
        label="Município"
        onChange={form.handleChange}
        error={form.touched.municipio && Boolean(form.errors.municipio)}
        helperText={form.touched.municipio && form.errors.municipio}
        value={form.values.municipio} />
      <TextField
        fullWidth
        id="telefono"
        name="telefono"
        label="Teléfono"
        onChange={form.handleChange}
        error={form.touched.telefono && Boolean(form.errors.telefono)}
        helperText={form.touched.telefono && form.errors.telefono}
        value={form.values.telefono} />
    </form>
  );
}

Form.propTypes = {
  form: PropTypes.object
}

export default Form;