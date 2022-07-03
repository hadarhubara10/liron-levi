import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Loader from '../common/Loader';
const PostDetails = () => {
  const postsInit = useOutletContext();
  let { postID } = useParams();
  const postSelected = postsInit.find((post) => post._id == postID);
  const contentInPost = postSelected.contentsInPost
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
  // const test = <p>{postSelected.contentsInPost[0].replace('\\n', <br />)}</p>;
  if (!postsInit.length > 0) return <Loader />;
  return (
    <Box
      sx={{
        textAlign: 'center',
        maxWidth: { md: '80%', xs: '90%', lg: '60%' },
        margin: '0 auto',
      }}
    >
      <h5 style={{ opacity: 0.5, height: '0', fontWeight: 'normal' }}>
        {postSelected.category}
      </h5>
      <h1
        style={{
          fontSize: '50px',
          height: '40px',
          fontWeight: 'normal',
          margin: 0,
        }}
      >
        {postSelected.title}
      </h1>
      <h6 style={{ opacity: 0.5, fontWeight: 'normal' }}>
        נכתב על ידי לירון לוי
      </h6>
      <img src={postSelected.img} alt="post" />
      <br />
      <div dangerouslySetInnerHTML={{ __html: contentInPost }}></div>
    </Box>
  );
};

export default PostDetails;
