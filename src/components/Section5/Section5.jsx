import React from "react";
import Section5Left from "./Left/Section5Left";
import Section5Right from "./Right/Section5Right";

function Section5() {
  return (
    <section class="fifth-heghlight-wrapper">
      <div class="container-fluid">
        <div class="row">
          <Section5Left />
          <Section5Right />
        </div>
      </div>
    </section>
  );
}

export default Section5;
