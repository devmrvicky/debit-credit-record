import { useEffect } from "react";
import { FaMoneyBill, FaTimes, FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { BackButton } from "./NavigationBtns";

const EditPage = ({
  costomers,
  handleEditCostData,
  editCostData,
  setEditCostData,
}) => {
  const { id } = useParams();
  const costForEdit = costomers.find(
    (costomer) => costomer.id.toString() === id
  );
  useEffect(() => {
    setEditCostData({
      ...editCostData,
      name:costForEdit.name,
      id: costForEdit.id,
      dateTime: costForEdit.dateTime,
      debt: costForEdit.debt,
      credit: costForEdit.credit,
      status: costForEdit.status,
    });
  }, [costomers, setEditCostData]);
  return (
    <div className="editor w-full h-full bg-zinc-100 fixed top-0 right-0 z-50">
      <div className="flex items-center justify-between mt-10 mb-20 w-full max-w-lg mx-auto">
        <BackButton />
        <h1 className="text-2xl font-semibold text-gray-500">
          Edit costumer data, {costForEdit.name}
        </h1>
        <button
          className="border border-black w-10 h-10 flex items-center justify-center rounded-full"
          // onClick={handleOpenEditor}
        >
          <FaTimes />
        </button>
      </div>
      <form
        className="flex flex-col gap-4 bg-white h-full rounded-3xl shadow-2xl px-4 py-20 relative"
        onSubmit={e => e.preventDefault()}
      >
        <FaUser className="absolute text-5xl border w-32 h-32 rounded-full p-2 bg-white -top-14 left-1/2 -translate-x-1/2 shadow-sm" />
        {/* name */}
        <label
          htmlFor="name"
          className="flex flex-col gap-1 w-full max-w-sm mx-auto"
        >
          <div className="flex items-center gap-4 px-4">
            <FaUser className="text-xl text-gray-400" />
            <span className="text-xl text-gray-400">Name</span>
          </div>
          <input
            autoFocus
            required
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="border p-2 text-md outline-none"
            value={costForEdit.name}
            readOnly
            // onChange={(e) =>
            //   setCostomerData({ ...constomerData, name: e.target.value })
            // }
          />
        </label>
        <label
          htmlFor="debt"
          className="flex flex-col gap-1 w-full  max-w-sm mx-auto "
        >
          <div className="flex items-center gap-4 px-4">
            <FaMoneyBill className="text-xl text-gray-400" />
            <span className="text-xl text-gray-400">Debt amount</span>
          </div>
          <input
            type="number"
            required
            name="debt-amount"
            id="debt"
            placeholder="Debt amount"
            className="border p-2 text-md outline-none"
            value={editCostData.debt}
            readOnly
            // onChange={(e) =>
            //   setCostomerData({ ...constomerData, debt: e.target.value })
            // }
          />
        </label>
        <label
          htmlFor="debt"
          className="flex flex-col gap-1 w-full  max-w-sm mx-auto "
        >
          <div className="flex items-center gap-4 px-4">
            <FaMoneyBill className="text-xl text-gray-400" />
            <span className="text-xl text-gray-400">Credit amount</span>
          </div>
          <input
            type="number"
            required
            name="credit-amount"
            id="debt"
            placeholder="Credit amount"
            className="border p-2 text-md outline-none"
            value={editCostData.credit}
            onChange={(e) =>
              setEditCostData({ ...editCostData, credit: e.target.value })
            }
          />
        </label>
        <div className="flex items-center justify-center gap-4 mt-16">
          <button type="reset" className="border w-32 h-10">
            Reset
          </button>
          <button type="submit" className="border w-32 h-10" onClick={() => handleEditCostData(id)}>
            Save change
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
