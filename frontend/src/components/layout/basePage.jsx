import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import AdminModal from './admiModal';
import ModeIcon from '@mui/icons-material/Mode';

import { axiosInstance } from '../../config/axios';
import exportToXLSX from "../../utils/xlsx";

const BasePage = (props) => {
  const { columns, api, filterFunction, modalForm, onPressSave, onSelectedRow, resetForm, fileName } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEdditing] = useState(false);
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

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const onPressSaveModal = async () => {
    onPressSave && await onPressSave();
    fetchData();
    closeModal();
  }

  const onClickNew = () => {
    setIsEdditing(false);
    resetForm();
    openModal();
  }

  const rowClicked = (values) => {
    resetForm();
    onSelectedRow && onSelectedRow(values);
    openModal();
    setIsEdditing(true);
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const downloadExcel = () => {
    exportToXLSX(searchValue
      ? filterFunction(data, searchValue)
      : data, fileName);
  }


  return (
    <>
      <Grid container alignItems="center" sx={{ mb: 2 }}>
        <Grid item xs={12} sm={8}>
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
        <Grid item xs={12} sm={1} justifyContent="flex-end">
          <IconButton onClick={reloadData} >{loading ? <CircularProgress /> : <ReplayIcon />}</IconButton>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button fullWidth onClick={downloadExcel}>Exportar a excel</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button fullWidth onClick={onClickNew}>Nuevo</Button>
        </Grid>
      </Grid>
      <DataGrid
        sx={{ height: "70vh" }}
        loading={loading}
        rowSelection={false}
        columns={[
          ...columns,
          {
            pinnable: true,
            field: "id", headerName: "Acciones", renderCell: (values) =>
              <IconButton onClick={() => rowClicked(values.row)}><ModeIcon /></IconButton>
          }
        ]}
        rows={searchValue
          ? filterFunction(data, searchValue)
          : data} />

      <AdminModal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        onPressSave={onPressSaveModal}
        title={isEditing ? "Modificando" : "Nuevo registro"}
        child={modalForm} />
    </>
  );
}

BasePage.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any),
  api: PropTypes.string,
  fileName: PropTypes.string,
  modalForm: PropTypes.node,
  filterFunction: PropTypes.func,
  onSelectedRow: PropTypes.func,
  onPressSave: PropTypes.func,
  resetForm: PropTypes.func,
  onCloseModal: PropTypes.func,
};

export default BasePage;