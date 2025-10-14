import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const BackButton = ({ url }) => {
  return (
    <Link
      to={url}
      className="flex items-center justify-center w-[150px] mb-5 px-4 py-2 border border-black rounded hover:scale-95 transition-transform bg-white text-black font-bold"
    >
      <FaArrowAltCircleLeft className="mr-2" /> Back
    </Link>
  );
};

export default BackButton;
