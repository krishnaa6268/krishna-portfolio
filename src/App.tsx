import { BrowserRouter } from "react-router-dom";
import React from "react";
import Pages from "./pages";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
