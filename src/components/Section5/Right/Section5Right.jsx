import React from "react";

import watch from "../../../assets/images/icons/watch-series5-logo.png";
function Section5Right() {
  return (
    <div class="right-side-wrapper col-sm-12 col-md-6">
      <div class="right-side-container">
        <div class="top-logo-wrapper">
          <div class="logo-wrapper">
            <img src={watch} />
          </div>
        </div>
        <div class="description-wraper">
          With the Always-On Retina display.
          <br />
          You’ve never seen a watch like this.
        </div>
        <div class="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section5Right;
