import { css, CSSResult } from "lit";

export const modalStyles: CSSResult = css`
  :host {
    display: block;
  }

  #dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 600px;
    max-height: 80%;
    overflow: auto;
    background: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    animation: fade-in 0.3s ease-out;
  }

  #dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  #close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translate(-50%, -40%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;
