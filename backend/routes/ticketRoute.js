import express from 'express';
import protect from '../middleware/authMiddleware.js';
import {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
} from '../controllers/ticketController.js';
import noteRouter from './noteRoute.js';

const ticketRouter = express.Router();

// Nested route for notes
ticketRouter.use('/:id/notes', noteRouter);

// Ticket routes
ticketRouter
  .route('/')
  .get(protect, getTickets)
  .post(protect, createTicket);

ticketRouter
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

export default ticketRouter;
