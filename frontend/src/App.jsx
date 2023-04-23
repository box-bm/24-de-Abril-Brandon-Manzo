import { Outlet } from "react-router-dom";
import Appbar from "./components/layout/appbar"
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <Appbar />
      </header>
      <main>
        <Container sx={{ mt: 2 }}>
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </>
  );
}

export default App
