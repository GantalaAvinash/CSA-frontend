import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { EventTable, EventForm } from './components';
import { Sidebar, Topbar } from './layout';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  content: {
    padding: theme.spacing(2),
  }
}));


const DashboardPage = () => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [eventToEdit, setEventToEdit] = useState({});
  const [error, setError] = useState('');
  const [editingEventId, setEditingEventId] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://csa-backend-iuwv.onrender.com/api/events');
        setEvents(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.response.data.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleEventSubmit = event => {
    event.preventDefault();
    if (editingEventId) {
    axios.put(`https://csa-backend-iuwv.onrender.com/api/events/${editingEventId}`, newEvent).then(res => {
    const updatedEvents = events.map(event => {
    if (event._id === editingEventId) {
    return res.data;
    }
    return event;
    });
    setEvents(updatedEvents);
    setEditingEventId(null);
    setNewEvent({});
    });
    } else {
    axios.post('https://csa-backend-iuwv.onrender.com/api/events', newEvent).then(res => {
    setEvents([...events, res.data]);
    setNewEvent({});
    });
    }
    };

  
    const handleEdit = (event) => {
      setEventToEdit(event);
      setIsEditing(true);
    };
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:3000/api/events/${id}`);
        setEvents(events.filter(event => event._id !== id));
      } catch (err) {
        setError(err.response.data.message);
      }
    };
  
    const handleUpdate = async (updatedEvent) => {
      try {
        const response = await axios.put(`http://localhost:3000/api/events/${updatedEvent._id}`, updatedEvent);
        setEvents(events.map(event => event._id === updatedEvent._id ? response.data : event));
        setIsEditing(false);
      } catch (err) {
        setError(err.response.data.message);
      }
    };

  return (
    <div className={classes.root}>
      {/* <Topbar onSignOut={handleSignOut} /> */}
      <Topbar />
      <Sidebar />
      <main className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Events
            </Typography>
            <EventTable events={events} onEdit={handleEdit} onDelete={handleDelete} />
            <EventForm onSubmit={handleEventSubmit} editingEventId={editingEventId} />
          </Grid>
          {/* <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Materials
            </Typography>
            <MaterialTable materials={materials} onEdit={handleEditMaterial} onDelete={handleDeleteMaterial} />
            <MaterialForm onSubmit={handleMaterialSubmit} editingMaterialId={editingMaterialId} />
          </Grid> */}
        </Grid>
      </main>
    </div>
  );
}

export default DashboardPage;
