import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Link,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  ListItemIcon
} from '@mui/material';
import { NavLink as RouterNavLink, Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { mainNavbarItems } from './navItems';

function Navigation() {
  const [drawerOpenState, setDrawerOpenState] = useState(false);
  const toggleDrawer = (state) => () => {
    setDrawerOpenState(state);
  };

  return (
    <Box>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer(true)}
              sx={{ mr: 10, display: { sm: 'none' } }}>
              <MenuIcon fontSize="large" />
            </IconButton>
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              sx={{ color: 'primary.contrastText', typography: 'h4' }}>
              LOGO
            </Link>

            <Box sx={{ ml: 8, display: { xs: 'none', sm: 'block' } }}>
              {mainNavbarItems.map((item) => (
                <Link
                  key={item.id}
                  component={RouterNavLink}
                  to={item.route}
                  underline="none"
                  sx={{ color: 'primary.contrastText', typography: 'h6', ml: 4 }}>
                  {item.label}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>

        <Box>
          <Drawer
            anchor="left"
            open={drawerOpenState}
            onClose={toggleDrawer(false)}
            sx={{ display: { sm: 'none' } }}>
            <Box sx={{ pt: 2, width: 250 }} onClick={toggleDrawer(false)}>
              <Link
                component={RouterLink}
                to="/"
                underline="none"
                sx={{ m: 2, typography: 'h5', color: 'inherit' }}>
                LOGO
              </Link>
              <Divider variant="middle" sx={{ mt: 2 }} />
              <List>
                {mainNavbarItems.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton component={RouterNavLink} to={item.route}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Navigation;
