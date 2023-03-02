import { FaPlus } from "react-icons/fa";

const AddNewBtn = ({ handleOpenEditor }) => {
  return (
    <button
      className="w-12 h-12 flex items-center justify-center border rounded-full hover:bg-gray-50 shadow-lg hover:scale-110"
      title="Add new"
      onClick={handleOpenEditor}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.5)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <FaPlus className="text-2xl" />
    </button>
  );
};

export default AddNewBtn;
