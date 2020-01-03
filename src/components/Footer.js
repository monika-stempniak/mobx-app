import React from "react";
import { observer, inject } from "mobx-react";

import "./Footer.css";

const Footer = inject("store")(
  observer(({ store }) => {
    const num = store.highEarnersCount;
    const plural = num === 1 ? "" : "s";

    return (
      <p className="footer">
        You have{" "}
        <span className="footer-text">{`${num} team member${plural}`}</span>{" "}
        that earn more than 500$/day.
      </p>
    );
  })
);

export default Footer;
