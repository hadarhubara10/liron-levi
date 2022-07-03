import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../../scss/shareModal.scss';
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

import { IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

const style = {
  position: 'absolute',
  borderRadius: '5px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  textAlign: 'center',
};

export default function ShareModal({ post }) {
  const shareURL = 'https://liron-levi.herokuapp.com';

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="btn-share-modal" onClick={handleOpen} aria-label="share">
        <ShareIcon size="small" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            שתפי את המאמר - {post.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FacebookShareButton
              url={`${shareURL}/blog/${post._id}`}
              children={<FacebookIcon size="36" round="true"></FacebookIcon>}
            />
            &nbsp;
            <EmailShareButton
              url={`${shareURL}/blog/${post._id}`}
              children={<EmailIcon size="36" round="true"></EmailIcon>}
            />
            &nbsp;
            <WhatsappShareButton
              url={`${shareURL}/blog/${post._id}`}
              children={<WhatsappIcon size="36" round="true"></WhatsappIcon>}
            />
            &nbsp;
            <TelegramShareButton
              url={`${shareURL}/blog/${post._id}`}
              children={<TelegramIcon size="36" round="true"></TelegramIcon>}
            />
            &nbsp;
            <TwitterShareButton
              url={`${shareURL}/blog/${post._id}`}
              children={<TwitterIcon size="36" round="true"></TwitterIcon>}
            />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
