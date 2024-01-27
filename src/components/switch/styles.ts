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

  a {
    color: rgba(43, 43, 43, 1);
    text-decoration: none;
    padding: 10px;
    border-bottom: 2px solid rgba(43, 43, 43, 1);
  }

  a:hover {
    background: rgba(43, 43, 43, 1);
    color: rgba(255, 255, 255, 1);
  }

  /*Button is :CHECKED*/

  input[type="checkbox"]:checked ~ div {
    background: var(--my-violet-blue);
    box-shadow: 0 0 2px var(--my-violet-blue);
  }

  input[type="checkbox"]:checked ~ div label {
    left: 20px;
    transform: rotate(360deg);
  }

  /*shared*/

  div,
  label {
    border-radius: 5rem;
  }

  /*'un':checked state*/

  div {
    height: 20px;
    width: 45px;
    background: rgba(43, 43, 43, 1);
    position: relative;
    box-shadow: 0 0 2px rgba(43, 43, 43, 1);
  }

  label {
    height: 20px;
    width: 25px;
    background: var(--my-dark-yellow);
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  label::before {
    content: "off";
    width: 0;
    font-size: 14px;
    position: absolute;
    left: 3px;
    top: 0;
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
    font-size: 14px;
    position: absolute;
    left: 5px;
    top: 0;
    background: var(--my-violet-blue);
  }
`;
