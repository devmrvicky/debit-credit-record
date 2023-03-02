import Person from "./Person";

const PendingCostomers = ({ costomers, handleDelete }) => {
  const pendingCost = costomers.filter(
    (costomer) => costomer.status === "pending"
  );
  return (
    <div className="constomer-list">
      <h1 className="text-2xl pt-3">Pending costomers</h1>
      <span className="text-sm pb-3 font-semibold italic block text-zinc-300">
        Pending {pendingCost.length} costomers
      </span>
      {pendingCost.map((constomer) => (
        <Person
          key={constomer.id}
          id={constomer.id}
          name={constomer.name}
          debt={constomer.debt}
          credit={constomer.credit}
          dateTime={constomer.datetime}
          status={constomer.status}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default PendingCostomers;
