import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import columns from "../components/categories/tableColumns";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const [categories, setCategories] = useState([]);

  const onChangeSearchValue = (value) => {
    setSearchValue(value ?? "");
  }

  const clearSearchValue = () => {
    setSearchValue("");
  }

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3000/api/categories")
    const data = await response.json()
    setCategories(data);
    setLoading(false);
  }

  const reloadData = async () => {
    setCategories([]);
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <Grid container alignItems="center" sx={{ mb: 2 }}>
        <Grid item xs={12} sm={10}>
          <TextField
            sx={{ maxWidth: 500 }}
            fullWidth
            variant="outlined"
            label="Buscar"
            placeholder="Buscar por categoria o descripcion"
            onChange={(e) => {
              onChangeSearchValue(e.target.value);
            }}
            value={searchValue}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchValue && (<InputAdornment position="end">
                <IconButton onClick={clearSearchValue}>
                  <CloseIcon />
                </IconButton>
              </InputAdornment>)
            }}
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <IconButton onClick={reloadData} >{loading ? <CircularProgress /> : <ReplayIcon />}</IconButton>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button fullWidth>Nuevo</Button>
        </Grid>
      </Grid>
      <DataGrid
        loading={loading}
        rowSelection={false}
        columns={columns}
        disableRowSelectionOnClick
        rows={searchValue
          ? categories
            .filter((category) =>
              category.categoria.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
              (category.descripcion ?? "").toString().toLowerCase().includes(searchValue.toLowerCase()))
          : categories} />
    </>
  );
}

export default Categories;