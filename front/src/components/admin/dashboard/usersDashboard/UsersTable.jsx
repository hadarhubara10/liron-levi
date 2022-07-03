import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button } from '@mui/material';
// import ButtonBootstrap from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';
import ModalCreateUser from './ModalCreateUsers';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import '../../../../scss/dashboard.scss';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const UsersTable = ({
  users,
  handleEditUser,
  handleDeleteClick,
  openCreateModal,
  open,
  handleClose,
  getAllUsersFromServer,
}) => {
  const editUser = (event) => {
    const id = event.data.id;
    const field = event.colDef.field;
    const value = event.value;
    handleEditUser({ id, field, value });
  };

  const deleteComponent = (params) => {
    return (
      <Button
        style={{ width: '100%' }}
        variant="outlined"
        color="error"
        onClick={() => handleDeleteClick(params.data.id)}
      >
        מחיקה
        <Box component="span" sx={{ display: { md: 'none', xl: 'inline' } }}>
          &nbsp;
        </Box>
        <DeleteIcon sx={{ display: { md: 'none', xl: 'inline' } }} />
      </Button>
    );
  };
  const createComponent = () => {
    return (
      <Button
        onClick={openCreateModal}
        style={{ width: '100%' }}
        variant="outlined"
        color="primary"
      >
        הוספה
        <Box component="span" sx={{ display: { md: 'none', xl: 'inline' } }}>
          &nbsp;
        </Box>
        <AddIcon sx={{ display: { md: 'none', xl: 'inline' } }} />
      </Button>
    );
  };
  const rows = users.map((user) => ({
    id: user._id,
    ...user,
  }));

  return (
    rows.length > 0 && (
      <div className="dashboard-font">
        <div
          className="ag-theme-alpine"
          style={{
            height: 'calc(100vh - 200px)',
            width: '100%',
          }}
        >
          <AgGridReact
            frameworkComponents={{
              deleteCellRenderer: deleteComponent,
              createComponent: createComponent,
            }}
            pagination={true}
            paginationAutoPageSize={true}
            onCellEditingStopped={editUser}
            stopEditingWhenCellsLoseFocus={true}
            enableRtl={true}
            animateRows={true}
            undoRedoCellEditing={true}
            rowData={rows}
            defaultColDef={{
              editable: true,
              sortable: true,
              flex: 1,
              minWidth: 100,
              filter: true,
              resizable: true,
            }}
          >
            <AgGridColumn
              headerName={'מזהה לקוח'}
              editable={false}
              field="id"
            ></AgGridColumn>
            <AgGridColumn headerName={'שם מלא'} field="name"></AgGridColumn>
            <AgGridColumn
              headerName={'מספר טלפון'}
              field="phoneNumber"
            ></AgGridColumn>
            <AgGridColumn headerName={'אימייל'} field="email"></AgGridColumn>
            <AgGridColumn
              headerName={'תאריך האירוע'}
              field="dateOfEvent"
            ></AgGridColumn>
            <AgGridColumn
              headerComponent={'createComponent'}
              flex={0.5}
              filter={false}
              sortable={false}
              editable={false}
              cellRendererSelector={(params) => {
                return { component: 'deleteCellRenderer' };
              }}
            ></AgGridColumn>
          </AgGridReact>
        </div>
        <ModalCreateUser
          open={open}
          handleClose={handleClose}
          getAllUsersFromServer={getAllUsersFromServer}
        />
      </div>
    )
  );
};

export default UsersTable;
