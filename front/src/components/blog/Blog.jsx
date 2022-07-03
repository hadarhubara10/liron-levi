import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import Grid from '@mui/material/Grid';
import '../../scss/blog.scss';
import Post from './Post';
import { useOutletContext } from 'react-router-dom';

const Blog = () => {
  const postsInit = useOutletContext();
  const [posts, setPosts] = useState(postsInit);
  const [postSelected, setPostSelected] = useState(posts);

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }, [postSelected]);

  const onClickCategory = (category) => {
    console.log(category);
    switch (category) {
      case 'all':
        setPostSelected(posts);
        break;
      case 'makeup':
        setPostSelected(posts.filter((post) => post.category === 'איפור'));
        break;
      case 'recommendedProduct':
        setPostSelected(
          posts.filter((post) => post.category === 'מוצרים מומלצים')
        );
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <br />
      <br />
      <Grid
        container
        maxWidth="xl"
        style={{ margin: '0 auto' }}
        className="grid-center"
      >
        <Grid item xs={2} style={{ position: 'sticky' }}>
          <SideBar onClickCategory={onClickCategory} />
        </Grid>
        {postSelected.map((post) => (
          <Grid
            key={post._id}
            item
            xs={12}
            md={3}
            style={{
              margin: '0 auto 30px',
              textAlign: 'center',
            }}
          >
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;
