import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const Appbar = () => {
  const { pathname } = useLocation();
  const navigation = useNavigate();

  const navigate = (path) => {
    navigation(path);
  }

  return (
    <Box sx={{ flexGrow: 1, zIndex: 999 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate("/")}>
            Prueba tecnica
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <Button color={pathname == "/categories" ? "inherit" : "inherit"} variant={pathname == "/categories" ? "outlined" : "text"} onClick={() => navigate("/categories")}>Categorias</Button>
            <Button color={pathname == "/subsidiaries" ? "inherit" : "inherit"} variant={pathname == "/subsidiaries" ? "outlined" : "text"} onClick={() => navigate("/subsidiaries")}>Sucursales</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Appbar;