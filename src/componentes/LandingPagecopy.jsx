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
import AdbIcon from '@mui/icons-material/Adb';
import NathaliaBeleño from "./NathaliaBeleño";
import Pilares from "./Pilares";
import Experiencia from "./Experiencia";
import QuiénSoy from "./QuiénSoy";
import Contacto from "./Contacto";
import { ButtonBase } from '@mui/material';
import '../css/LandingPage.css'
import { Height } from '@mui/icons-material';


const pages = ['Home', 'Pillars', 'Experience', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (i) => {
    setAnchorElNav(null);
    
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <>
    <AppBar style={{position:'sticky'}} className='appBar'>
      <Container maxWidth="xl" style={{backgroundColor: 'transparent',  color: '#0C7FB0'}}>
        <Toolbar  disableGutters>
          <Typography
            style={{width: '10vw', color: '#0C7FB0', textTransform: 'none', textDecoration: 'none',}}
            variant="h6"
            noWrap
            component='a'
            href="/"
            borderBottom='none !important'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'revert',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none !important',
              
            }}
          >
            NSBA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="blue"
            >
              <MenuIcon />
            </IconButton>
           
            <Menu
              style={{ color: '#061820',  textTransform: 'none'}}
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
              {pages.map((page, i) => (
                <MenuItem  key={page}  onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center" >
                  <Button

                  style={{fontSize: '14px',  color: '#061820',  textTransform: 'none'}}
                  href={`#page-${i}`}
                  >
                  {page}
                  </Button>  
                 </Typography>
                </MenuItem>
              ))}
            </Menu>
           
          </Box>
          
          <Typography
            style={{ color: '#0C7FB0',  textTransform: 'none',  textDecoration: 'none', paddingLeft: '0%', marginLeft: '0%'}}
            variant="h5"
            noWrap
            component="a"
            href=""
            borderBottom='none !important'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'revert',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#F9F9F9',
              textDecoration: 'none !important',
            }}
          >
            NSBA
          </Typography>
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'center' }}>
            {pages.map((page, i) => (
              <a
                style={{margin: '2%',  textTransform: 'none', justifyContent: 'center'}}
                href={`#page-${i}`}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#061820', display: 'block' }}
              >
                {page}
              </a>
               
            ))}
          </Box>
       
          <Box sx={{ flexGrow: 0}} >
            <Tooltip title="Hoja de vida">
              <ButtonBase variant="contained" style={{backgroundColor: '#0C7FB0',  borderRadius: '5%'}} onClick={handleOpenUserMenu} sx={{ p: 1}}>
                <a href='/Nathalia-Beleño.pdf' target="_blank" rel="noopener noreferrer" download style={{backgroundColor:'#0C7FB0', color: '#F9F9F9', justifyContent:'center', borderBottomColor: "#0C7FB0"}}>Download CV</a>
              </ButtonBase>
            </Tooltip> 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div  className='pages'>
        <scroll-page  id="page-0" ><NathaliaBeleño/></scroll-page>
        <scroll-page id="page-1"><Pilares/></scroll-page>
        <scroll-page id="page-2" ><Experiencia/></scroll-page>
        <scroll-page id="page-3" ><QuiénSoy/></scroll-page>
        <scroll-page id="page-4" ><Contacto/></scroll-page>
     </div>
     </>
  );
}
export default ResponsiveAppBar;