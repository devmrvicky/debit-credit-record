import React from "react";
import Person from "./Person";

const HistoryPage = ({ costHistory, handleDelete }) => {
  // console.log(costHistory)
  return (
    <div>
      <div className="sticky top-0 bg-white shadow-md z-50">
        <h1 className="text-2xl pt-3">History of costumers</h1>
        <span className="text-sm pb-3 font-semibold italic block text-zinc-300">
          {costHistory.length} costumers in history
        </span>
      </div>
      {costHistory.map((constomer) => (
        <Person
          key={constomer.deletedId}
          id={constomer.id}
          name={constomer.name}
          debt={constomer.debt}
          credit={constomer.credit}
          dateTime={constomer.dateTime}
          status={constomer.status}
          fromHistory={true}
          handleDelete={handleDelete}
          // editMode={editMode}
          // setEditMode={setEditMode}
        />
      ))}
    </div>
  );
};

export default HistoryPage;
