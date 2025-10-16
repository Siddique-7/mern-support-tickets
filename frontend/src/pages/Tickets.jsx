import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice.js";
import { toast } from "react-toastify";
import Spinner from '../components/spinner.jsx';
import BackButton from "../components/BackButton.jsx";
import TicketItem from "../components/ticketItem.jsx";

function Tickets() {
  const { tickets, isLoading, isError, isSuccess, message } = useSelector(state => state.ticket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) return () => dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <section className="min-h-screen p-6 bg-gray-50">
      <BackButton url='/' />

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Tickets</h1>

        <div className="grid grid-cols-4 gap-4 bg-gray-100 p-3 rounded-lg font-semibold text-gray-700">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>

        <div className="mt-4 space-y-2">
          {tickets && tickets.length > 0 ? (
            tickets.map(ticket => <TicketItem key={ticket._id} ticket={ticket} />)
          ) : (
            <p className="text-gray-500 text-center py-4">No tickets found</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Tickets;
