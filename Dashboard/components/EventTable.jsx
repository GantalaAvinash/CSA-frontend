import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const EventTable = ({ events, onEdit, onDelete }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Drive Link</TableCell>
        <TableCell>Image Link</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {events.map(event => (
        <TableRow key={event._id}>
          <TableCell>{event.title}</TableCell>
          <TableCell>{event.description}</TableCell>
          <TableCell>{event.driveLink}</TableCell>
          <TableCell>{event.image}</TableCell>
          <TableCell>
            <EditIcon onClick={() => onEdit(event._id)} />
            <DeleteIcon onClick={() => onDelete(event._id)} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default EventTable;