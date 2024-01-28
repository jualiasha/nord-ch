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
    max-width: 30rem;
    max-height: 80%;
    overflow: auto;
    background: white;
    border: 1px solid var(--my-violet-blue);
    border-radius: 10px;
    padding: 3rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    animation: fade-in 0.3s ease-out;
  }

  #dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  #close {
    position: absolute;
    top: 0.62rem;
    right: 0.62rem;
    width: 1.87rem;
    height: 1.87rem;
    border: none;
    background: none;
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
