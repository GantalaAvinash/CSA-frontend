import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { ExitToApp as ExitToAppIcon } from '@material-ui/icons';

const Topbar = ({ onSignOut }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        Cyber Security Association
      </Typography>
      {/* <IconButton color="inherit" onClick={onSignOut}> */}
      <IconButton color="inherit">
        <ExitToAppIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Topbar;