import React from "react";

import Controls from "./components/Controls";
import Table from "./components/Table";
import { appStore } from "./store/Store";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="my-5 header">Mobx Table</h1>
        <Controls store={appStore} />
        <Table store={appStore} />
      </div>
    </div>
  );
}

export default App;
