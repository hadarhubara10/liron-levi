import React, { useEffect, useState } from 'react';
import {
  deleteUser,
  editUser,
  // deleteUser,
  // editUser,
  getAllUsers,
} from '../../../../services/usersAdminService';
import UsersTable from './UsersTable';

const UsersDashboard = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getAllUsersFromServer();
  }, []);
  const getAllUsersFromServer = () => {
    console.log('users');
    getAllUsers().then((res) => res.data && setUsers(res.data));
  };
  const handleEditUser = (params) => {
    if (params.field === 'dateOfEvent' && typeof params.value == 'string') {
      params.value = params.value.split(',');
    }
    editUser(params)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const handleDeleteClick = (userID) => {
    deleteUser(userID)
      .then((res) => {
        console.log(res.data);
        getAllUsersFromServer();
      })
      .catch((err) => console.log(err.response.data));
  };
  const openCreateModal = () => {
    handleOpen();
  };
  return (
    users.length > 0 && (
      <>
        <UsersTable
          users={users}
          handleEditUser={handleEditUser}
          handleDeleteClick={handleDeleteClick}
          openCreateModal={openCreateModal}
          open={open}
          handleClose={handleClose}
          getAllUsersFromServer={getAllUsersFromServer}
        />
      </>
    )
  );
};

export default UsersDashboard;
