import React from "react";
import ReactDOM from "react-dom";
import Horse from './Horse.jsx';

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Horse name="Kurre" breed="Pony" age="10" height="130cm" />
    </div>
  );
};

const container = document.getElementById("root");
ReactDOM.render(React.createElement(App), container);
