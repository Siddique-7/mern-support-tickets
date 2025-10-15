import express from 'express'
import  protect  from '../middleware/authMiddleware.js'
import { getNotes, addNotes } from '../controllers/noteController.js'

// till reach here url  is /api/tickets/:ticketId
const noteRouter = express.Router({ mergeParams: true })

noteRouter.route('/')
  .get(protect, getNotes)
  .post(protect, addNotes)
// url will be /api/tickets/:ticketId/notes

export default noteRouter
