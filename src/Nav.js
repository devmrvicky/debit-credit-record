import {
  FaTh,
  FaHourglassHalf,
  FaHistory,
  FaCheckCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full">
      <ul className="w-full max-w-lg mx-auto flex items-center justify-center flex-wrap">
        <li>
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 hover:bg-green-200 m-1"
          >
            <FaTh />
            <span>All</span>
          </Link>
        </li>
        <li>
          <Link
            to="/pending"
            className="flex items-center gap-2 px-3 py-2 hover:bg-green-200 m-1"
          >
            <FaHourglassHalf />
            <span>Pending</span>
          </Link>
        </li>
        <li>
          <Link
            to="/complete"
            className="flex items-center gap-2 px-3 py-2 hover:bg-green-200 m-1"
          >
            <FaCheckCircle />
            <span>Completed</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 hover:bg-green-200 m-1"
          >
            <FaHistory />
            <span>History</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
