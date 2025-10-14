import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { getTicket, closeTicket } from '../features/tickets/ticketSlice';
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { addNote, getNotes } from "../features/notes/noteSlice";
import NoteItem from "../components/NoteItem";
import { FaPlus } from "react-icons/fa";

Modal.setAppElement('#root');

function Ticket() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteText, setNoteText] = useState('');
  const dispatch = useDispatch();
  const { ticket, isSuccess, isError, message, isLoading } = useSelector(state => state.ticket);
  const { notes, isLoading: noteLoading } = useSelector(state => state.notes);
  const param = useParams();
  const navigate = useNavigate();

  const handleTicketClose = () => {
    dispatch(closeTicket(param.id)).unwrap()
      .then(() => {
        navigate('/tickets');
        toast.success('Ticket closed.');
      })
      .catch(toast.error);
  };

  useEffect(() => {
    if (isError) toast.error(message);
    dispatch(getTicket(param.id));
    dispatch(getNotes(param.id));
  }, [message, isError, param.id, dispatch]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onNoteSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ ticketId: param.id, text: noteText })).unwrap()
      .then(() => {
        setNoteText('');
        closeModal();
      })
      .catch(error => toast.error(error));
  };

  if (isLoading) return <Spinner />;
  if (isError) return <h3 className="text-center mt-10 text-red-500">Something Went Wrong</h3>;

  return (
    <section className="min-h-screen p-6 bg-gray-50">
      <BackButton url='/tickets' />

      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-between">
          Ticket ID: {ticket._id}
          <span className={`px-3 py-1 rounded-lg text-white ${ticket.status === 'new' ? 'bg-green-500' : ticket.status === 'open' ? 'bg-blue-500' : 'bg-red-600'}`}>
            {ticket.status}
          </span>
        </h2>
        <h3 className="text-gray-600 mb-1">Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}</h3>
        <h3 className="text-gray-600 mb-4">Product: {ticket.products}</h3>
        <hr className="mb-4" />
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <h3 className="font-semibold mb-2">Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
        <h2 className="text-xl font-bold mb-4">Notes</h2>

        {ticket.status !== 'closed' && (
          <button onClick={openModal} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mb-4">
            <FaPlus /> Add Note
          </button>
        )}

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto mt-24 outline-none relative"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          contentLabel="Add Note"
        >
          <h2 className="text-xl font-bold mb-4">Add Note</h2>
          <button onClick={closeModal} className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-lg font-bold">X</button>
          <form onSubmit={onNoteSubmit} className="space-y-4">
            <textarea
              value={noteText}
              name="noteText"
              id="noteText"
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Note text..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Submit</button>
          </form>
        </Modal>

        <div className="space-y-4 mb-6">
          {notes.map(note => (
            <NoteItem key={note?._id} note={note} />
          ))}
        </div>

        {ticket.status !== 'closed' && (
          <button onClick={handleTicketClose} className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
            Close Ticket
          </button>
        )}
      </div>
    </section>
  );
}

export default Ticket;
