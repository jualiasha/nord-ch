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
    left: 0.93rem;
  }

  input[type="checkbox"]:checked ~ .medium label {
    left: 1.25rem;
  }

  input[type="checkbox"]:checked ~ .large label {
    left: 1.25rem;
  }

  /*shared*/

  div,
  label {
    border-radius: 5rem;
  }

  /*'un':checked state*/

  .small {
    height: 0.93rem;
    width: 2.2rem;
  }
  .small label {
    height: 0.93rem;
    width: 1.25rem;
  }

  .medium {
    height: 1.25rem;
    width: 2.81rem;
  }

  .medium label {
    height: 1.25rem;
    width: 1.56rem;
  }

  .large {
    height: 1.56rem;
    width: 3.12rem;
  }

  .large label {
    height: 1.56rem;
    width: 1.87rem;
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
    font-size: 0.75rem;
    left: 0.12rem;
  }

  .medium label::before {
    font-size: 0.87rem;
    left: 0.18rem;
  }

  .large label::before {
    left: 0.25rem;
  }

  label::before,
  label::after {
    background: rgba(43, 43, 43, 1);
    border-radius: 0.31rem;
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
    font-size: 0.75rem;
    left: 0.18rem;
  }

  input[type="checkbox"]:checked ~ .medium label::before {
    font-size: 0.87rem;
    left: 0.31rem;
  }

  input[type="checkbox"]:checked ~ .large label::before {
    left: 0.43rem;
  }

  .required {
    color: var(--my-switch-required-color, darkred);
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
