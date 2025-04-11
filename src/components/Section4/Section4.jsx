import React from "react";
import Sectio4Left from "./Left/Sectio4Left";
import Section4Right from "./Right/Section4Right";

function Section4() {
  return (
    <section class="fourth-heghlight-wrapper">
      <div class="container-fluid">
        <div class="row">
          <Sectio4Left />
          <Section4Right />
        </div>
      </div>
    </section>
  );
}

export default Section4;
