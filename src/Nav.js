import { useEffect } from "react";
import {
  FaTh,
  FaHourglassHalf,
  FaHistory,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = ({ isActive, setIsActive }) => {
  // useEffect(() => {
  //   setIsActive(JSON.parse(localStorage.getItem('isActivePage')))
  // }, [])
  const handleActive = (title) => {
    const newActiveStatus = {
      ...isActive,
      all: false,
      pending: false,
      completed: false,
      history: false,
      [title]: true,
    };
    setIsActive(newActiveStatus);
    localStorage.setItem("isActivePage", JSON.stringify(newActiveStatus));
  };
  return (
    <nav className="w-full">
      <ul className="w-full max-w-lg mx-auto flex items-center justify-center flex-wrap">
        <li>
          <Link
            to="/"
            className={`flex items-center gap-2 px-3 py-2 hover:bg-green-200 m-1 ${
              isActive.all && "border-b-2 border-green-300 bg-green-100"
            }`}
            title="all"
            onClick={(e) => handleActive(e.currentTarget.title)}
          >
            <FaTh />
            <span>All</span>
          </Link>
        </li>
        <li>
          <Link
            to="/pending"
            className={`flex items-center gap-2 px-3 py-2 hover:bg-green-200 m-1 ${
              isActive.pending && "border-b-2 border-green-300 bg-green-100"
            }`}
            title="pending"
            onClick={(e) => handleActive(e.currentTarget.title)}
          >
            <FaHourglassHalf />
            <span>Pending</span>
          </Link>
        </li>
        <li>
          <Link
            to="/complete"
            className={`flex items-center gap-2 px-3 py-2 hover:bg-green-200 m-1 ${
              isActive.completed && "border-b-2 border-green-300 bg-green-100"
            }`}
            title="completed"
            onClick={(e) => handleActive(e.currentTarget.title)}
          >
            <FaCheckCircle />
            <span>Completed</span>
          </Link>
        </li>
        <li>
          <Link
            to="/history"
            className={`flex items-center gap-2 px-3 py-2 hover:bg-green-200 m-1 ${
              isActive.history && "border-b-2 border-green-300 bg-green-100"
            }`}
            title="history"
            onClick={(e) => {
              // console.log(e);
              handleActive(e.currentTarget.title);
            }}
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
