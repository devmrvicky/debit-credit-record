import "./styles.css";
import Header from "./Header";
import Nav from "./Nav";
import AddNewBtn from "./AddNewBtn";
import Editor from "./Editor";
import { useState } from "react";
import { format } from "date-fns";
import AllCostomers from "./AllCostomers";
import PendingCostomers from "./PendingCostomers";
import CompleteCostomers from "./CompleteCostomers";
import { Routes, Route } from "react-router-dom";
import CostumerPage from "./CostumerPage";
import EditPage from "./EditPage";
import HistoryPage from "./HistoryPage";

export default function App() {
  const [editMode, setEditMode] = useState(false);
  const [isActive, setIsActive] = useState(
    JSON.parse(localStorage.getItem("isActivePage")) || {
      all: true,
      pending: false,
      completed: false,
      history: false,
    }
  );
  const [openEditor, setOpenEditor] = useState(false);
  const [costomers, setCostomers] = useState(
    JSON.parse(localStorage.getItem("costomerList")) || []
  );
  const [constomerData, setCostomerData] = useState({
    id: "",
    name: "",
    debt: "",
    credit: "",
    dateTime: "",
    status: "",
  });
  const [editCostData, setEditCostData] = useState({
    id: "",
    name: "",
    debt: "",
    credit: "",
    dateTime: "",
    status: "",
  });

  // Deleted costumer data
  const [costHistory, setCostHistory] = useState(
    JSON.parse(localStorage.getItem("costHistory")) || []
  );
  const [costHistoryData, setCostHistoryData] = useState({
    deletedId: "",
    deletedTime: "",
  });
  // edit data

  // handle delete
  const handleDelete = (id) => {
    const remainCostomers = costomers.filter(
      (constomer) => constomer.id !== id
    );
    setCostomers(remainCostomers);
    localStorage.setItem("costomerList", JSON.stringify(remainCostomers));
    // store data in costHistory arr
    const deletedId = costHistory.length
      ? costHistory[costHistory.length - 1].deletedId + 1
      : 1;
    const deletedTime = new Date();
    const deletedCost = costomers.find((costumer) => costumer.id === id);
    const newCostHistoryData = {
      ...deletedCost,
      ...costHistoryData,
      deletedId,
      deletedTime,
    };
    // console.log(newCostHistoryData);
    const newDeletedCostList = [...costHistory, newCostHistoryData];
    setCostHistory(newDeletedCostList);
    localStorage.setItem("costHistory", JSON.stringify(newDeletedCostList));
  };

  const handleOpenEditor = () => {
    setOpenEditor((oldValue) => !oldValue);
  };

  // change status
  const changeStatus = (debt, credit) => {
    const status =
      debt >= credit ? `${debt - credit === 0 ? "complete" : "pending"}` : null;
    return status;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = costomers.length ? costomers[costomers.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    // console.log(Number(constomerData.debt) >= Number(constomerData.credit));
    // console.log(typeof constomerData.debt, typeof constomerData.credit);
    const status = changeStatus(Number(constomerData.debt), Number(constomerData.credit))
    const newData = { ...constomerData, id, dateTime, status };
    const newDataList = [...costomers, newData];
    setCostomers(newDataList);
    localStorage.setItem("costomerList", JSON.stringify(newDataList));
    setCostomerData({
      id: "",
      name: "",
      debt: "",
      credit: "",
      dateTime: "",
      status: "",
    });
    // console.log(id);
  };

  // edit cost data
  const handleEditCostData = (id) => {
    // console.log(editCostData);
    const status = changeStatus(Number(editCostData.debt), Number(editCostData.credit))
    const editedDate = new Date();
    const newEditData = {...editCostData, status, editedDate}
    const newDataList = [...costomers, newEditData];
    setCostomers(newDataList);
    localStorage.setItem("costomerList", JSON.stringify(newDataList));
  };

  return (
    <div className="App flex flex-col h-screen relative bg-zinc-50">
      <Header />
      <Nav isActive={isActive} setIsActive={setIsActive} />
      <hr />
      <main className="bg-white max-w-lg mx-auto w-full grow relative shadow-md overflow-auto ">
        {/* <h1 className="text-2xl py-3">List of costomer</h1> */}
        <>
          <Routes>
            <Route
              path="/"
              element={
                <AllCostomers
                  costomers={costomers}
                  handleDelete={handleDelete}
                  editMode={editMode}
                  setEditMode={setEditMode}
                />
              }
            />
            <Route
              path="/pending"
              element={
                <PendingCostomers
                  tilte="Pending costomers"
                  costomers={costomers}
                  handleDelete={handleDelete}
                />
              }
            />
            <Route
              path="/complete"
              element={
                <CompleteCostomers
                  tilte="Completed costomers"
                  costomers={costomers}
                  handleDelete={handleDelete}
                />
              }
            />
            <Route
              path="/costumerpage/:id"
              element={
                <CostumerPage
                  costomers={costomers}
                  handleDelete={handleDelete}
                />
              }
            />
            <Route
              path="/history"
              element={
                <HistoryPage
                  costHistory={costHistory}
                  // costomers={costomers}
                  handleDelete={handleDelete}
                />
              }
            />
            <Route
              path="/edit/:id"
              element={
                <EditPage
                  costomers={costomers}
                  editCostData={editCostData}
                  setEditCostData={setEditCostData}
                  handleEditCostData={handleEditCostData}
                />
              }
            />
          </Routes>
        </>
        {openEditor && (
          <Editor
            handleOpenEditor={handleOpenEditor}
            handleSubmit={handleSubmit}
            constomerData={constomerData}
            setCostomerData={setCostomerData}
          />
        )}
        <div className="fixed bottom-4 right-4 bg-white">
          <AddNewBtn handleOpenEditor={handleOpenEditor} />
        </div>
      </main>
    </div>
  );
}
