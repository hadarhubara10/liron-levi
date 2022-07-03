import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button } from '@mui/material';
// import ButtonBootstrap from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';
import ModalCreatePost from './ModalCreatePost';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import '../../../../scss/dashboard.scss';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import LoadingOverlay from '../LoadingOverlay';
const PostsTable = ({
  posts,
  handleEditPost,
  handleDeleteClick,
  openCreateModal,
  open,
  handleClose,
  getAllPostsFromServer,
}) => {
  const [gridApi, setGridApi] = useState(null);

  const hideLoading = () => {
    gridApi.hideOverlay();
  };

  const loading = () => {
    gridApi.showLoadingOverlay();
  };

  const editPost = (event) => {
    const id = event.data.id;
    const field = event.colDef.field;
    const value = event.value;
    handleEditPost({ id, field, value });
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
  const onGridReady = (params) => {
    setGridApi(params.api);
  };
  const rows = posts.map((post) => ({
    id: post._id,
    contentsInPost: 'קיים',
    ...post,
  }));

  return (
    rows.length > 0 && (
      <div className="dashboard-font">
        <div
          className="ag-theme-alpine"
          style={{
            height: 'calc(100vh - 160px)',
            width: '100%',
          }}
        >
          <AgGridReact
            frameworkComponents={{
              deleteCellRenderer: deleteComponent,
              createComponent: createComponent,
              loadingOverlay: LoadingOverlay,
            }}
            pagination={true}
            paginationAutoPageSize={true}
            onCellEditingStopped={editPost}
            stopEditingWhenCellsLoseFocus={true}
            onGridReady={onGridReady}
            loadingOverlayComponent={'loadingOverlay'}
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
              headerName={'מזהה פוסט'}
              editable={false}
              field="id"
            ></AgGridColumn>
            <AgGridColumn headerName={'כותרת'} field="title"></AgGridColumn>
            <AgGridColumn
              headerName={'קטגוריה'}
              field="category"
            ></AgGridColumn>
            <AgGridColumn headerName={'תמונה'} field="img"></AgGridColumn>
            <AgGridColumn
              headerName={'תוכן מקדים'}
              field="previewContent"
            ></AgGridColumn>
            <AgGridColumn
              headerName={'תוכן בתוך הפוסט'}
              field="contentsInPost"
              flex={0.8}
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
        <ModalCreatePost
          open={open}
          handleClose={handleClose}
          getAllPostsFromServer={getAllPostsFromServer}
        />
      </div>
    )
  );
};

export default PostsTable;