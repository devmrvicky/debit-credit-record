import React from "react";
import { FaCertificate, FaCheck, FaHourglassHalf } from "react-icons/fa";
import { useParams } from "react-router-dom";
import UserIcon from "./UserIcon";

const CostumerPage = ({ costomers, handleDelete }) => {
  const { id } = useParams();
  const individualCostumer = costomers.find(
    (costumer) => costumer.id.toString() === id
  );
  console.log(individualCostumer);
  return (
    <div className="individual-costumer w-full h-full py-4 flex flex-col items-center">
      <UserIcon status={individualCostumer.status} size="80px" iconSize="5xl" />
      <p className="text-4xl">{individualCostumer.name}</p>
      <span className="text-lg italic text-zinc-400">
        {individualCostumer.dateTime}
      </span>
      <div className="pt-6 font-semibold text-2xl flex items-center gap-4">
        {individualCostumer.status === "complete" ? (
          <>
            <span className="relative text-green-400">
              <FaCertificate className="text-3xl" />{" "}
              <FaCheck className="absolute text-sm top-1/2 text-white left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </span>
            <span className="text-green-400 ">Payment has been Completed.</span>
          </>
        ) : (
          <>
            <FaHourglassHalf className="text-yellow-400" />
            <span className="text-yellow-400">Payment is pending!</span>
          </>
        )}
      </div>
    </div>
  );
};

export default CostumerPage;
