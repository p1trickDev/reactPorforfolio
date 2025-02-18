//import React from "react";
import styled from "styled-components";

const Switch = () => {
  return (
    <StyledWrapper>
      <div className="toggle-switch">
        <label className="switch-label">
          <input type="checkbox" className="checkbox" />
          <span className="slider" />
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-switch {
    position: relative;
    width: 60px; /* Smaller width */
    height: 30px; /* Smaller height */
    --light: #d8dbe0;
    --dark: #28292c;
    --link: rgb(27, 129, 112);
    --link-hover: rgb(24, 94, 82);
  }

  .switch-label {
    position: absolute;
    width: 100%;
    height: 30px; /* Smaller height */
    background-color: var(--dark);
    border-radius: 15px; /* Adjusted border-radius */
    cursor: pointer;
    border: 2px solid var(--dark); /* Adjusted border size */
  }

  .checkbox {
    position: absolute;
    display: none;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px; /* Adjusted border-radius */
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 5px; /* Adjusted position */
    left: 5px; /* Adjusted position */
    width: 20px; /* Smaller width */
    height: 20px; /* Smaller height */
    border-radius: 50%;
    -webkit-box-shadow: inset 8px -3px 0px 0px var(--light); /* Adjusted shadow */
    box-shadow: inset 8px -3px 0px 0px var(--light); /* Adjusted shadow */
    background-color: var(--dark);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider::before {
    -webkit-transform: translateX(30px); /* Adjusted transform */
    -ms-transform: translateX(30px); /* Adjusted transform */
    transform: translateX(30px); /* Adjusted transform */
    background-color: var(--dark);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export default Switch;
