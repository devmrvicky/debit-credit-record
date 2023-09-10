import {
  FaTrashAlt,
  FaPen,
  FaAngleRight,
  FaClock,
  FaRupeeSign,
  FaArrowDown,
  FaArrowUp,
  FaMinus,
  FaEquals,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import UserIcon from "./UserIcon";

const Person = ({
  id,
  name,
  debt,
  credit,
  status,
  dateTime,
  handleDelete,
  editMode,
  setEditMode,
  fromHistory
}) => {
  return (
    <div className="group border-t border-b flex items-center gap-6 p-2 px-5 relative">
      <UserIcon status={status} />
      <div className="constomer-info text-left">
        <h3 className="text-2xl flex items-center gap-2">
          {name}
          <span
            className="text-sm items-center gap-1 text-zinc-300 hidden group-hover:flex"
            title="time"
          >
            <FaClock className="inline-block" /> {dateTime}
          </span>
        </h3>
        <div className="flex items-center gap-1 font-semibold">
          <span className="flex items-center " title="Debt amount">
            <FaArrowDown className="text-red-400" />
            <FaRupeeSign className="text-red-400" />
            {debt}{" "}
          </span>
          <span>
            {" "}
            <FaMinus />
          </span>
          <span className="flex items-center" title="Credit amount">
            <FaArrowUp className="text-green-400" />
            <FaRupeeSign className="text-green-400" />
            {credit}{" "}
          </span>
          <FaEquals />
          {debt - credit}
        </div>
      </div>
      <div className="hidden group-hover:flex cta  h-full gap-5 items-center justify-center px-2 w-32 absolute right-0 backdrop-blur-md opacity-0 hover:opacity-100 transition">
        <button className="hover:text-red-500" onClick={() => handleDelete(id)}>
          <FaTrashAlt className="text-xl" />
        </button>
        {!fromHistory && <Link to={`/edit/${id}`}>
          <button className="hover:text-green-500">
            <FaPen className="text-xl" />
          </button>
        </Link>}
        <Link to={`/costumerpage/${id}`}>
          <button className="border px-2 py-1 rounded-2xl hover:bg-zinc-100">
            <FaAngleRight className="text-xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

Person.defaultProps = {
  fromHistory: false,
}

export default Person;
