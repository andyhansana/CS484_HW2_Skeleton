import React from "react";
import "./App.css";
import { AddRequestForm, RequestList } from './components/ServiceRequest'
import Nav from './components/Navbar'
import RequestChart from "./components/Chart";
import Landing from './components/Landing'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/list" element={<RequestList />} />
        <Route path="/add" element={<AddRequestForm />} />
        <Route path="/chart" element={<RequestChart />} />
      </Routes>
    </>
  );
}

export default App;