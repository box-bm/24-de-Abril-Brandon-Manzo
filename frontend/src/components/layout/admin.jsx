import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import { axiosInstance } from '../../config/axios';

const BasePage = (props) => {
  const { columns, api, filterFunction } = props;
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const [data, setData] = useState([]);

  const onChangeSearchValue = (value) => {
    setSearchValue(value ?? "");
  }

  const clearSearchValue = () => {
    setSearchValue("");
  }

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await axiosInstance.get(api)
    const data = response.data;
    setData(data);
    setLoading(false);
  }, [api])

  const reloadData = async () => {
    setData([]);
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);


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
          ? filterFunction(data, searchValue)
          : data} />
    </>
  );
}

BasePage.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any),
  api: PropTypes.string,
  filterFunction: PropTypes.func
};

export default BasePage;