import Person from "./Person";

const AllCostomers = ({ costomers, handleDelete, editMode, setEditMode }) => {
  return (
    <div className="costumer-list ">
      <div className="costumer-list-head sticky top-0 bg-white shadow-md z-50">
        <h1 className="text-2xl pt-3">All costumers</h1>
        <span className="text-sm pb-3 font-semibold italic block text-zinc-300">
          All {costomers.length} costomers
        </span>
      </div>
      {costomers.map((constomer) => (
        <Person
          key={constomer.id}
          id={constomer.id}
          name={constomer.name}
          debt={constomer.debt}
          credit={constomer.credit}
          dateTime={constomer.dateTime}
          status={constomer.status}
          handleDelete={handleDelete}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      ))}
    </div>
  );
};

export default AllCostomers;
