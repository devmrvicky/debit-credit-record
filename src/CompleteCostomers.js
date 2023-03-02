import Person from "./Person";

const CompleteCostomers = ({ costomers, handleDelete }) => {
  const completedCost = costomers.filter(
    (costomer) => costomer.status === "complete"
  );
  return (
    <div className="constomer-list">
      <h1 className="text-2xl pt-3">Completed costomers</h1>
      <span className="text-sm pb-3 font-semibold italic block text-zinc-300">
        Completed {completedCost.length} costomers
      </span>
      {completedCost.map((constomer) => (
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

export default CompleteCostomers;
