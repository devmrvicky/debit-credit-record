import {
  FaUser,
  FaCheckCircle,
  FaHourglassHalf,
  FaTrashAlt,
  FaPen,
  FaAngleRight
} from "react-icons/fa";

const Person = ({ id, name, debt, credit, status, handleDelete }) => {
  return (
    <div className="group border-t border-b flex items-center gap-6 p-2 px-5 relative">
      <div
        className={`border ${status === "complete" && "border-green-300"} ${
          status === "pending" && "border-yellow-300"
        } rounded-full w-16 h-16 flex items-center justify-center bg-white relative`}
      >
        <FaUser className="text-3xl" />
        {status && (
          <div className="flex items-center justify-center badge bg-white w-5 h-5 rounded-full absolute top-0 right-0 ">
            {status === "complete" && (
              <FaCheckCircle
                className="text-green-300"
                title="payment completed"
              />
            )}
            {status === "pending" && (
              <FaHourglassHalf
                className="text-yellow-300"
                title="payment pending"
              />
            )}
          </div>
        )}
      </div>
      <div className="constomer-info text-left">
        <h3 className="text-2xl">{name}</h3>
        <div>
          debt: {debt} credit: {credit} remain: {debt - credit}
        </div>
      </div>
      <div className="hidden group-hover:flex cta  h-full gap-5 items-center justify-center px-2 w-32 absolute right-0 backdrop-blur-md opacity-0 hover:opacity-100 transition">
        <button className="hover:text-red-500" onClick={() => handleDelete(id)}>
          <FaTrashAlt className="text-xl" />
        </button>
        <button className="hover:text-green-500">
          <FaPen className="text-xl" />
        </button>
        <button className="border px-2 py-1 rounded-2xl hover:bg-zinc-100">
          <FaAngleRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Person;
