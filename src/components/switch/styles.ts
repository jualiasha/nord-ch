import { css, CSSResult, html, LitElement, TemplateResult } from "lit";

export const switchStyles = css`
  /* Use the :host pseudo-element to style the switch component */
  :host {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
  }

  /* Use the ::part pseudo-element to style the switch track */
  ::part(track) {
    background-color: var(--switch-track-color, #ccc);
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: background-color 0.3s;
  }

  /* Use the ::part pseudo-element to style the switch thumb */
  ::part(thumb) {
    background-color: var(--switch-thumb-color, #fff);
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    transition: transform 0.3s;
  }

  /* Use the ::slotted pseudo-element to style the switch label */
  ::slotted(label) {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
  }

  /* Use attribute selectors to style the switch component based on its state */
  :host([checked]) ::part(track) {
    background-color: var(--switch-track-checked-color, #4caf50);
  }

  :host([checked]) ::part(thumb) {
    transform: translateX(20px);
  }

  :host([disabled]) ::part(track) {
    background-color: var(--switch-track-disabled-color, #e7e7e7);
  }

  :host([disabled]) ::part(thumb) {
    background-color: var(--switch-thumb-disabled-color, #bdbdbd);
  }

  :host([indeterminate]) ::part(track) {
    background-color: var(--switch-track-indeterminate-color, #2196f3);
  }

  :host([indeterminate]) ::part(thumb) {
    transform: translateX(10px);
  }
`;
