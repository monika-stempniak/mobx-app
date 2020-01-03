import React from "react";
import { observer, inject } from "mobx-react";

import { Store } from "../store/Store";

import "./Footer.css";

interface InjectedProps {
  store: Store;
}

@inject("store")
@observer
class Footer extends React.Component<{}> {
  // https://medium.com/@prashaantt/strongly-typing-injected-react-props-635a6828acaf
  get injected() {
    return this.props as InjectedProps;
  }

  render() {
    const num = this.injected.store.highEarnersCount;
    const plural = num === 1 ? "" : "s";

    return (
      <p className="footer">
        You have{" "}
        <span className="footer-text">{`${num} team member${plural}`}</span>{" "}
        that earn more than 500$/day.
      </p>
    );
  }
}

export default Footer;
