import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", {}, [
  React.createElement("h1", {}, "Hello World from React!"),
  React.createElement("h2", { className: "h2class" }, "H2 line in react"),
]);

const headingJSX = <h1>This is created with JSX 🚀</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingJSX);
