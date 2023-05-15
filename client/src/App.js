import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/home";
import Finished from "./components/finished"

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/finished" element={<Finished />}/>
      </Routes>
    </div>
  );
};

export default App;
