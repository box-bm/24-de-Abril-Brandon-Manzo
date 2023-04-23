import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Appbar = () => {
  const navigation = useNavigate();

  const navigate = (path) => {
    navigation(path)
  }

  return (
    <Box sx={{ flexGrow: 1, zIndex: 999 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate("/")}>
            Prueba tecnica
          </Typography>
          <Button color="inherit" onClick={() => navigate("/categories")}>Categorias</Button>
          <Button color="inherit" onClick={() => navigate("/subsidiaries")}>Sucursales</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Appbar;