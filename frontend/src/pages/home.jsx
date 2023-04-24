import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>

      <Box sx={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <Typography variant="h3">Bienvendio</Typography>
        <Typography variant="body1">Puedes ingresar a las siguientes opciones</Typography>

        <Box sx={{ display: "flex", gap: 2, my: 2 }}>
          <Button variant="outlined" onClick={() => navigate("/categories")}>Categorias</Button>
          <Button variant="outlined" onClick={() => navigate("/subsidiaries")}>Sucursales</Button>
        </Box>

      </Box>
      <Typography variant="caption" sx={{ textAlign: "center" }}>Este sistema unicamente sirve para ejemplicar un CRUD</Typography>
    </>
  );
}

export default Home;