import React from "react";

import "./Partners.css" 

import teific_logo from "../../assets/Home-images/teific.png";

function Partners() {
  return (
    <>
      <div className="ourPartners">
        <a href="/inactive url">Our Partners</a>
      </div>
      <div className="partners">
        <a href="https://www.teific.in">
          <img src={teific_logo} alt="" />
        </a>

        {/* <img src={carzilla_logo} alt=""/> */}
      </div>
    </>
  );
}

export default Partners;