import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import DashboardContainer from './DashboardContainer';
import UsersDashboard from './dashboard/usersDashboard/UsersDashboard';
import PostsDashboard from './dashboard/postsDashboard/PostsDashboard';
import SignIn from './SignIn';
import UploadImage from './dashboard/upload/UploadImage';
import ImagesList from './dashboard/upload/ImagesList';

const AdminRouting = () => {
  return (
    <Routes>
      <Route path="/admin" element={<DashboardContainer />}>
        <Route index element={<UsersDashboard />} />
        <Route path="users" element={<UsersDashboard />} />
        <Route path="posts" element={<PostsDashboard />} />
        <Route path="upload" element={<UploadImage />} />
        <Route path="images" element={<ImagesList />} />
      </Route>
      <Route path="/admin/signin" element={<SignIn />} />
    </Routes>
  );
};

export default AdminRouting;
