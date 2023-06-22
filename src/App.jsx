// add to the top
import React from "react";
import { createRoot } from "react-dom/client";

const Horse = (props) => {
    return React.createElement("div", {}, [
        React.createElement ("h1", {}, props.name),
        React.createElement ("h2", {}, props.breed),
        React.createElement ("h2", {}, props.age),
        React.createElement ("h2", {}, props.height),
    ])
}

const App = () => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Horse, {
        name: "Kurre",
        breed: "Pony",
        age: "10",
        height: "130cm",
      }),
    ]);
  };
  
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(React.createElement(App));