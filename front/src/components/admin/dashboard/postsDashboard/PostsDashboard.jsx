import React, { useEffect, useState } from 'react';
import {
  deletePost,
  editPost,
  // deleteUser,
  // editUser,
  // getAllUsers,
  getAllPosts,
} from '../../../../services/postsAdminService';
import PostsTable from './PostsTable';

const UsersDashboard = () => {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getAllPostsFromServer();
  }, []);
  const getAllPostsFromServer = () => {
    getAllPosts().then((res) => res.data && setPosts(res.data));
  };
  const handleEditPost = (params) => {
    if (params.field === 'contentsInPost' && typeof params.value == 'string') {
      params.value = params.value.split(',');
    }
    editPost(params)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const handleDeleteClick = (postID) => {
    deletePost(postID)
      .then((res) => {
        console.log(res.data);
        getAllPostsFromServer();
      })
      .catch((err) => console.log(err.response.data));
  };
  const openCreateModal = () => {
    handleOpen();
  };
  return (
    posts.length > 0 && (
      <>
        <PostsTable
          posts={posts}
          handleEditPost={handleEditPost}
          handleDeleteClick={handleDeleteClick}
          openCreateModal={openCreateModal}
          open={open}
          handleClose={handleClose}
          getAllPostsFromServer={getAllPostsFromServer}
        />
      </>
    )
  );
};

export default UsersDashboard;
