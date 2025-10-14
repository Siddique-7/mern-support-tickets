import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const user = useSelector((state) => state.auth.user) || JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center py-5 border-b border-gray-300 px-5 mb-14">
      <div className="text-2xl font-bold">
        <Link to="/">Support Desk</Link>
      </div>

      <ul className="flex items-center space-x-4">
        {user ? (
          <li>
            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 bg-black text-white font-bold rounded hover:scale-95 transition-transform"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="flex items-center px-4 py-2 bg-black text-white font-bold rounded hover:scale-95 transition-transform"
              >
                <FaSignInAlt className="mr-2" /> Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="flex items-center px-4 py-2 bg-black text-white font-bold rounded hover:scale-95 transition-transform"
              >
                <FaUser className="mr-2" /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
