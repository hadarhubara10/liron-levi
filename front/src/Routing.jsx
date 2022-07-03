import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import ContainerBlog from './components/blog/ContainerBlog';
import PostDetails from './components/blog/PostDetails';
import Home from './components/home/Home';

const Routing = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<ContainerBlog />}>
        <Route index element={<Blog />} />
        <Route path=":postID" element={<PostDetails />} />
      </Route>
    </Routes>
  );
};

export default Routing;
