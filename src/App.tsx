import React from "react";
import { configure } from "mobx";
import { Provider } from "mobx-react";

import Controls from "./components/Controls";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { createStores } from "./store/createStores";

import "./App.css";

configure({ enforceActions: "observed" });

function App() {
  const rootStore = createStores();

  return (
    <Provider {...rootStore}>
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
