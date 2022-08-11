import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";

// import { HelloWordApp } from "./HelloWordApp";
// import { FirstApp } from "./FirstApp";

import "./style.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWordApp /> */}
    {/* <FirstApp title={'hola'}/> */}
    <CounterApp value={0}/>
  </React.StrictMode>
);
