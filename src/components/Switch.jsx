import React, { useState } from "react";
import styled from "styled-components";

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <StyledWrapper>
      <div className="toggle-switch">
        <label className="switch-label">
          <input
            type="checkbox"
            className="checkbox"
            checked={isChecked}
            onChange={handleToggle}
          />
          <span className="slider" />
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-switch {
    position: relative;
    width: 60px;
    height: 30px;
    --light: #d8dbe0;
    --dark: #28292c;
    --link: rgb(27, 129, 112);
    --link-hover: rgb(24, 94, 82);
  }

  .switch-label {
    position: absolute;
    width: 100%;
    height: 30px;
    background-color: var(--dark);
    border-radius: 15px;
    cursor: pointer;
    border: 2px solid var(--dark);
  }

  .checkbox {
    position: absolute;
    display: none;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: inset 8px -3px 0px 0px var(--light);
    background-color: var(--dark);
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider::before {
    transform: translateX(30px);
    background-color: var(--dark);
    box-shadow: none;
  }
`;

export default Switch;
