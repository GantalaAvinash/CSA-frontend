import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const EventForm = ({ onSubmit, editingEventId }) => {
  const [event, setEvent] = useState({ name: '', date: '', location: '' });

  useEffect(() => {
    if (editingEventId) {
      axios.get(`https://csa-backend-iuwv.onrender.com/api/events/${editingEventId}`).then(res => setEvent(res.data));
    }
  }, [editingEventId]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(event, editingEventId);
  };

  return (
    <form onSubmit={handleSubmit}>
        <TextField
            label="Title"
            value={event.title}
            onChange={e => setEvent({ ...event, name: e.target.value })}
            margin="normal"
            fullWidth
        />
        <TextField
            label="description"
            type="date"
            value={event.description}
            onChange={e => setEvent({ ...event, date: e.target.value })}
            margin="normal"
            fullWidth
        />
        <TextField
            label="Event Link"
            value={event.driveLink}
            onChange={e => setEvent({ ...event, location: e.target.value })}
            margin="normal"
            fullWidth
        />
        <TextField
            label="Image Link"
            value={event.image}
            onChange={e => setEvent({ ...event, location: e.target.value })}
            margin="normal"
            fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
            {editingEventId ? 'Update Event' : 'Create Event'}
        </Button>
    </form>
);
};

export default EventForm;
