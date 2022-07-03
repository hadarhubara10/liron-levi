import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import '../../variables.css';
import '../../scss/navbar.scss';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const pages = ['בית', /* 'קצת עליי', */ 'בלוג', 'צרי קשר'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const handleClickPages = async (e) => {
    // On mobile - innerHTML, on Laptop value
    // const page = e.target.value || e.target.innerHTML;
    const page = e.target.innerText || e.target.innerHTML;
    console.log(page);
    switch (page) {
      case 'בית':
        await navigate('/');
        scrollToTop();
        break;
      case 'קצת עליי':
        await navigate('/about');
        break;
      case 'בלוג':
        await navigate('/blog');
        break;
      case 'צרי קשר':
        window.scrollTo({
          left: 0,
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });

        break;
      case 'LIRON MAKEUP ARTIST':
        await navigate('/');
        scrollToTop();
        break;
      default:
        break;
    }
  };
  return (
    <AppBar position="sticky" style={{ backgroundColor: 'var(--color-pink)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={handleClickPages}
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: '350px',
              cursor: 'pointer',
              // fontSize: '19px',
            }}
          >
            LIRON MAKEUP ARTIST
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={(e) => {
                    handleCloseNavMenu();
                    handleClickPages(e);
                  }}
                >
                  <Typography
                    /* onClick={handleClickPages} */ textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            onClick={handleClickPages}
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              cursor: 'pointer',
            }}
          >
            LIRON MAKEUP ARTIST
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <React.Fragment key={page}>
                <Button
                  aria-label={pages}
                  className="hover-underline-animation"
                  onClick={(e) => {
                    handleCloseNavMenu();
                    handleClickPages(e);
                  }}
                  sx={{
                    my: 1,
                    color: 'white',
                    display: 'block',
                  }}
                >
                  <span style={{ fontSize: '19px' }}>{page}</span>
                </Button>
                &nbsp; &nbsp;
              </React.Fragment>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              width: '300px',
              display: { xs: 'none', md: 'block' },
              textAlign: 'left',
            }}
          >
            {/* Facebook */}
            <Link
              className="link"
              color="inherit"
              rel="noopener"
              href="https://www.facebook.com/liron.levii"
              target="_blank"
            >
              <IconButton color="inherit">
                <FacebookTwoToneIcon className="icon" />
              </IconButton>
            </Link>
            &nbsp;
            {/* Instagram */}
            <Link
              className="link"
              color="inherit"
              rel="noopener"
              href="https://www.instagram.com/lironlevii_/"
              target="_blank"
            >
              <IconButton color="inherit">
                <InstagramIcon className="icon" />
              </IconButton>
            </Link>
            &nbsp;
            {/* Whatsapp */}
            <Link
              color="inherit"
              rel="noopener"
              href="https://wa.me/972526411604?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%94%D7%90%D7%99%D7%A4%D7%95%D7%A8%20%3A)"
              target="_blank"
              className="link"
            >
              <IconButton color="inherit">
                <WhatsAppIcon className="icon" />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
