import React from "react";
import { configure } from "mobx";
import { Provider } from "mobx-react";

import Controls from "./components/Controls";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { appStore } from "./store/Store";

import "./App.css";

configure({ enforceActions: "observed" });

function App() {
  return (
    <Provider store={appStore}>
      <div className="container">
        <h1 className="my-5 header">Mobx Table</h1>
        <Controls />
        <Table />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
