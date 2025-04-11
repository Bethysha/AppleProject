import React from "react";
import tvlogo from "../../../assets/images/icons/apple-tv-logo.png";
import banker from "../../../assets/images/home/banker.png";
function Section5Left() {
  return (
    <div class="left-side-wrapper col-sm-12 col-md-6">
      <div class="left-side-container">
        <div class="top-logo-wrapper">
          <div class="logo-wrapper">
            <img src={tvlogo} />
          </div>
        </div>

        <div class="tvshow-logo-wraper">
          <img src={banker} />
        </div>

        <div class="watch-more-wrapper">
          <a href="#">Watch now on the Apple TV App</a>
        </div>
      </div>
    </div>
  );
}

export default Section5Left;
