import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header.jsx";
import PrivateRoute from "./components/privateRoute.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Tickets from "./pages/Tickets.jsx";
import Ticket from "./pages/Ticket.jsx";
import NewTicket from "./pages/NewTicket.jsx";

function App() {
  return (
    <>
      <Router>
        <div className="container mx-auto px-4">
          <Header />

          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route path="/" element={<PrivateRoute />}>
              <Route index element={<Home />} />
            </Route>

            <Route path="/tickets" element={<PrivateRoute />}>
              <Route index element={<Tickets />} />
            </Route>

            <Route path="/ticket/:id" element={<PrivateRoute />}>
              <Route index element={<Ticket />} />
            </Route>

            <Route path="/new-ticket" element={<PrivateRoute />}>
              <Route index element={<NewTicket />} />
            </Route>
            
          </Routes>
        </div>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
