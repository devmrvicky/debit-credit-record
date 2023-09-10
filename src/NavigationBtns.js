import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BackButton = () => {
  return (
    <button className="border border-black hover:bg-gray-50 w-10 h-10 rounded-full flex justify-center items-center">
      <FaArrowLeft />
    </button>
  );
};

const ForwardButton = () => {
  return (
    <button className="border border-black hover:bg-gray-50 w-10 h-10 rounded-full flex justify-center items-center">
      <FaArrowRight />
    </button>
  );
};

export { BackButton, ForwardButton };
