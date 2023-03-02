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

export default function App() {
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
    status: ""
  });

  // handle delete
  const handleDelete = (id) => {
    const remainCostomers = costomers.filter(
      (constomer) => constomer.id !== id
    );
    setCostomers(remainCostomers);
    localStorage.setItem("costomerList", JSON.stringify(remainCostomers));
  };

  // const persons = ;

  const handleOpenEditor = () => {
    setOpenEditor((oldValue) => !oldValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = costomers.length ? costomers[costomers.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const status =
      constomerData.debt >= constomerData.credit
        ? `${
            constomerData.debt - constomerData.credit === 0
              ? "complete"
              : "pending"
          }`
        : null;
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
      status: ""
    });
    // console.log(id);
  };

  return (
    <div className="App flex flex-col h-screen relative bg-zinc-50">
      <Header />
      <Nav />
      <hr />
      <main className="bg-white max-w-lg mx-auto w-full grow relative shadow-md">
        {/* <h1 className="text-2xl py-3">List of costomer</h1> */}
        <>
          {costomers.length ? (
            <>
              <Routes>
                <Route
                  path="/"
                  element={
                    <AllCostomers
                      tilte="All costomers"
                      costomers={costomers}
                      handleDelete={handleDelete}
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
              </Routes>
            </>
          ) : (
            <p className="text-3xl mt-32 italic text-zinc-500">
              No anyone costomers here!
            </p>
          )}
        </>
        {openEditor && (
          <Editor
            handleOpenEditor={handleOpenEditor}
            handleSubmit={handleSubmit}
            constomerData={constomerData}
            setCostomerData={setCostomerData}
          />
        )}
        <div className="absolute bottom-4 right-4">
          <AddNewBtn handleOpenEditor={handleOpenEditor} />
        </div>
      </main>
    </div>
  );
}
