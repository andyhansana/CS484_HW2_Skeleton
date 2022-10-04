import React, { useState } from "react";
import "./App.css";
import { AddRequestForm, RequestList } from "./components/ServiceRequest";
import Nav from "./components/Navbar";
import RequestChart from "./components/Chart";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
import initialData from "./initial-data.json";

function App() {
  const [requests, setRequests] = useState(initialData);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/list"
          element={
            <RequestList requests={requests} setRequests={setRequests} />
          }
        />
        <Route
          path="/add"
          element={
            <AddRequestForm requests={requests} setRequests={setRequests} />
          }
        />
        <Route path="/chart" element={<RequestChart requests={requests} />} />
      </Routes>
    </>
  );
}

export default App;