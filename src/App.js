const Horse = () => {
    return React.createElement("div", {}, [
        React.createElement ("h1", {}, "Kurre"),
        React.createElement ("h2", {}, "Pony"),
        React.createElement ("h2", {}, "130cm"),
    ])
}

const App = () => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Horse),
    ]);
  };
  
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));