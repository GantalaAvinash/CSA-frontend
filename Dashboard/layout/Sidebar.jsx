import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
import EventIcon from '@material-ui/icons/EventOutlined';

import { Link } from 'react-router-dom';

const Sidebar = () => (
  <Drawer variant="permanent">
    <List>
      <Link to="/">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link to="/events">
        <ListItem button>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
      </Link>
    </List>
  </Drawer>
);

export default Sidebar;
