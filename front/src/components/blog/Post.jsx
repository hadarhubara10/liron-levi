import React from 'react';
import { Button, Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import ShareModal from './ShareModal';
const Post = ({ post }) => {
  const navigate = useNavigate();
  const postClickNavigate = (id) => {
    console.log(id);
    navigate(id);
  };
  return (
    <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
      <Typography gutterBottom variant="h5" component="div">
        {post.title}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {post.category}
      </Typography>
      <CardMedia
        component="img"
        height="140"
        image={post.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography className="typography-font" color="text.secondary">
          {post.previewContent}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <button
          variant="text"
          className="typography-font btn-card"
          color="inherit"
        >
          שיתוף
        </button> */}
        <button
          onClick={() => {
            postClickNavigate(post._id);
          }}
          variant="text"
          className="btn-card"
          color="inherit"
        >
          {' '}
          להמשך קריאה {'>>'}
        </button>
        <ShareModal post={post} />
      </CardActions>
    </Card>
  );
};

export default Post;
