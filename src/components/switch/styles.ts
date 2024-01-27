import { css } from "lit";

export const switchStyles = css`
  *,
  *::before,
  *::after {
    transition: 400ms all ease-in-out 50ms;
    box-sizing: border-box;
    backface-visibility: hidden;
  }

  input[type="checkbox"] {
    display: none;
  }
  div:focus {
    transition: none;
    outline: 3px solid var(--my-violet-blue);
    box-shadow: none;
  }

  /*Button is :CHECKED*/

  input[type="checkbox"]:checked ~ div {
    background: var(--my-violet-blue);
    box-shadow: 0 0 2px var(--my-violet-blue);
  }

  input[type="checkbox"]:checked ~ div label {
    transform: rotate(360deg);
  }

  input[type="checkbox"]:checked ~ .small label {
    left: 15px;
  }

  input[type="checkbox"]:checked ~ .medium label {
    left: 20px;
  }

  input[type="checkbox"]:checked ~ .large label {
    left: 20px;
  }

  /*shared*/

  div,
  label {
    border-radius: 5rem;
  }

  /*'un':checked state*/

  .small {
    height: 15px;
    width: 35px;
  }
  .small label {
    height: 15px;
    width: 20px;
  }

  .medium {
    height: 20px;
    width: 45px;
  }

  .medium label {
    height: 20px;
    width: 25px;
  }

  .large {
    height: 25px;
    width: 50px;
  }

  .large label {
    height: 25px;
    width: 30px;
  }

  div {
    background: rgba(43, 43, 43, 1);
    position: relative;
    box-shadow: 0 0 2px rgba(43, 43, 43, 1);
  }

  label {
    background: var(--my-dark-yellow);
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .disabled label {
    background: var(--my-light-black);
  }

  label::before {
    content: "off";
    width: 0;
    position: absolute;
    top: 0;
  }

  .small label::before {
    font-size: 12px;
    left: 2px;
  }

  .medium label::before {
    font-size: 14px;
    left: 3px;
  }

  .large label::before {
    left: 4px;
  }

  label::before,
  label::after {
    background: rgba(43, 43, 43, 1);
    border-radius: 5px;
  }

  /* on toggle */

  input[type="checkbox"]:checked ~ div label {
    background: var(--my-vivd-cerulean);
  }

  input[type="checkbox"]:checked ~ div label::before {
    content: "on";
    width: 0;
    position: absolute;
    top: 0;
    background: var(--my-violet-blue);
  }

  input[type="checkbox"]:checked ~ .small label::before {
    font-size: 12px;
    left: 3px;
  }

  input[type="checkbox"]:checked ~ .medium label::before {
    font-size: 14px;
    left: 5px;
  }

  input[type="checkbox"]:checked ~ .large label::before {
    left: 7px;
  }

  .required {
    color: darkred;
    position: absolute;
  }

  .small .required {
    left: 2.3rem;
  }

  .medium .required {
    left: 3rem;
  }
  .large .required {
    left: 3.5rem;
  }
`;
