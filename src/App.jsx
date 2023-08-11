import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details.jsx";
import SearchParams from "./SearchParams.jsx";

const App = () => {
  return (
    <BrowserRouter>
    
      <h1>Adopt me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
ReactDOM.render(React.createElement(App), container);
