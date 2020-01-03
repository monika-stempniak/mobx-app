import React, { Component } from "react";
import { observer } from "mobx-react";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    const num = this.props.store.highEarnersCount;
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

Footer = observer(Footer);
