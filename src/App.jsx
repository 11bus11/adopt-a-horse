import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
ReactDOM.render(React.createElement(App), container);
