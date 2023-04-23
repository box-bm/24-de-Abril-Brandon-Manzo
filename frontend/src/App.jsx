import { Outlet } from "react-router-dom";
import Appbar from "./components/layout/appbar"
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <Appbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App
