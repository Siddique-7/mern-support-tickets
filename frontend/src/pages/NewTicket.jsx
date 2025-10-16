import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice.js";
import Spinner from '../components/spinner.jsx';
import BackButton from "../components/BackButton.jsx";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const { tickets, ticket, isError, isSuccess, message, isLoading } = useSelector(state => state.ticket);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [products, setProduct] = useState("iPhone");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(isError) toast(message);
    if(isSuccess) {
      navigate('/');
      dispatch(reset());
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if(!products || !description) {
      toast('Kindly fill required field');
      return;
    }
    dispatch(createTicket({products, description}));
  };

  if(isLoading) return <Spinner />;

  return (
    <section className="min-h-screen p-6 bg-gray-50 flex flex-col items-center">
      <BackButton url='/' />

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold mb-2">Create New Ticket</h1>
          <p className="text-gray-600">Please fill out form below.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Customer Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Customer Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="products" className="block mb-1 font-medium">Select Product <sup>*</sup></label>
            <select
              name="products"
              id="products"
              value={products}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="iPhone">iPhone</option>
              <option value="iMac">iMac</option>
              <option value="iPad">iPad</option>
              <option value="Macbook Pro">Macbook Pro</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block mb-1 font-medium">Description of the issue <sup>*</sup></label>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewTicket;
