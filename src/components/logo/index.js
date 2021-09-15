import React from "react";

import "./styles.scss";
const Logo = () => {
  return (
    <>
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg">
          <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
          </filter>
        </svg>
        <span filter-content="E">Element</span>
      </div>
    </>
  );
};

export default Logo;
