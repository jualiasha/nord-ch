import { LitElement, html, CSSResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { switchStyles } from "./styles.ts";

@customElement("my-switch")
export class MySwitch extends LitElement {
  // Define the properties of the switch component
  @property({ type: Boolean })
  checked = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  indeterminate = false;

  public defaultChecked: boolean = false;

  // Define the event listeners for the switch component
  connectedCallback() {
    super.connectedCallback();
    // Add a click listener to toggle the switch
    this.addEventListener("click", this.handleClick);
    // Add a change listener to update the switch state
    this.addEventListener("change", this.handleChange);
    // Add a focus listener to add a focus ring to the switch
    this.addEventListener("focus", this.handleFocus);
    // Add a blur listener to remove the focus ring from the switch
    this.addEventListener("blur", this.handleBlur);
  }

  // Define the template of the switch component
  render() {
    return html`
      <input type="checkbox" id="toggle" />
      <div>
        <label for="toggle"></label>
      </div>
    `;
  }

  // Define the methods for the switch component
  handleClick() {
    // If the switch is not disabled, toggle its checked state
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  handleChange() {
    // If the switch is checked, set its indeterminate state to false
    if (this.checked) {
      this.indeterminate = false;
    }
  }

  handleFocus() {
    // If the switch is focused, add a focus ring style to it
    this.style.boxShadow = "0 0 0 2px var(--switch-focus-ring-color, #2196f3)";
  }

  handleBlur() {
    // If the switch is blurred, remove the focus ring style from it
    this.style.boxShadow = "none";
  }
  // Define the styles of the switch component
  static styles: CSSResult = switchStyles;
  disconnectedCallback() {
    super.disconnectedCallback();
    // Remove the event listeners from the switch
    this.removeEventListener("click", this.handleClick);
    this.removeEventListener("change", this.handleChange);
    this.removeEventListener("focus", this.handleFocus);
    this.removeEventListener("blur", this.handleBlur);
  }
}
