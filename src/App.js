import React from "react";
import { configure } from "mobx";

import Controls from "./components/Controls";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { appStore } from "./store/Store";

import "./App.css";

configure({ enforceActions: "observed" });

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="my-5 header">Mobx Table</h1>
        <Controls store={appStore} />
        <Table store={appStore} />
        <Footer store={appStore} />
      </div>
    </div>
  );
}

export default App;
