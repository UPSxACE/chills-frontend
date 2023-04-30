import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { SxProps } from '@mui/material/styles';
import Head from 'next/head';
import { useState } from 'react';

export interface IMainLayoutProps {
  children: React.ReactNode;
  // Add props here if needed
  // FIXME - Add prop "title"
}

export default function MainLayout({ children }: IMainLayoutProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Head>
        <title>Project Chills</title>
        <meta name="description" content="Project Chills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar component="header" position="static" sx={styles.navbar}>
        <Box sx={styles.navbarWrapper}>
          <IconButton size="medium" sx={styles.hamburguer} onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h4"
            fontFamily="Nunito"
            sx={styles.logo}
          >
            Project Chills
          </Typography>
          <IconButton size="medium" sx={styles.profileIcon}>
            <AccountCircle />
          </IconButton>
          <Menu {...(menuProps(anchorEl, handleClose) as any)}>
            <MenuItem>
              <Typography component="span" variant="body1" fontFamily="Nunito">
                Login
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography component="span" variant="body1" fontFamily="Nunito">
                Register
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </AppBar>
      {children}
    </>
  );
}

const menuProps = (anchorEl: any, handleClose: any) => ({
  anchorEl: anchorEl,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  keepMounted: true,
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  open: Boolean(anchorEl),
  onClose: handleClose,
});

const styles: { [key: string]: SxProps } = {
  navbar: {
    backgroundColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    boxShadow: 'none',
  },
  navbarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    py: 0.5,
    px: 1,
    boxShadow: 'none',
    height: '3.5rem',
    width: '100%',
    maxWidth: 1400,
  },
  hamburguer: {
    color: 'primary.main',
    stroke: '#58419f',
    '& .MuiSvgIcon-root': {
      fontSize: '2.125rem',
    },
    //mr: 1,
  },
  profileIcon: {
    color: 'primary.main',
    //ml: 'auto',
    '& .MuiSvgIcon-root': {
      fontSize: '2.125rem',
    },
  },
  logo: {
    mr: 'auto',
    ml: 'auto',
    color: 'primary.main',
    fontWeight: 'bold',
    fontSize: '1.8rem',
  },
};
