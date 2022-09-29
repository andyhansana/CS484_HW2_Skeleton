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

import { useState} from 'react';

function App() {
  const[items, setItems] = useState([
    
      {
          "emailId": "chris@nolights.here",
          "ldescription": "The lights on my block are all out. Please fix them.",
          "name": "Chris",
          "sdescription": "light out"
      },
      {
          "emailId": "tejas@needs.trashcans",
          "ldescription": "Please give me some trash cans.",
          "name": "Tejas",
          "sdescription": "no garbage cans"
      },
      {
          "emailId": "i@need.sleep",
          "ldescription": "My neighbors are jackhammering all day and all night. Please make them stop.",
          "name": "Tired",
          "sdescription": "neighbors make too much noise"
      }
  ]);


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/list" element={<RequestList />}  />
        <Route path="/add" element={<AddRequestForm />} />
        <Route path="/chart" element={<RequestChart />} />
      </Routes>
    </>
  );
}

export default App;