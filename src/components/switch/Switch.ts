import { LitElement, html, CSSResult, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";
import { switchStyles } from "./styles.ts";

@customElement("my-switch")
export class MySwitch extends LitElement {
  // Define the properties of the switch component
  @property({ type: Boolean })
  checked = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  required = false;

  public size: string = "medium";
  private _inputElement: null | HTMLInputElement = null;

  // Define the event listeners for the switch component
  connectedCallback() {
    super.connectedCallback();
    // Add a focus listener to add a focus ring to the switch
    this.addEventListener("focus", this._handleFocusEvent);
    // Add a blur listener to remove the focus ring from the switch
    this.addEventListener("blur", this._handleBlurEvent);
  }

  protected willUpdate(_changedProperties: PropertyValues) {
    if (_changedProperties.has("checked")) {
      this._handleInputElementChecked();
      this._sendOnChangeEvent();
    }
  }

  // Define the template of the switch component
  render() {
    const classes = {
      small: this.size === "small",
      medium: this.size === "medium",
      large: this.size === "large",
      disabled: this.disabled,
    };
    return html`
      <input
        ?required=${this.required}
        type="checkbox"
        id="toggle"
        @click=${(e: InputEvent) => e.preventDefault()}
      />
      <div
        part="toggle"
        tabindex="0"
        class=${classMap(classes)}
        @click=${this._handleClick}
        @keydown=${this._onEnterEvent}
      >
        <label for="toggle" part="label"></label>
        ${when(this.required, () => html`<span class="required">*</span>`)}
      </div>
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this._inputElement = this.renderRoot.querySelector("input");
    this._handleInputElementChecked();
  }

  private _handleInputElementChecked(): void {
    if (this._inputElement) {
      this._inputElement.checked = this.checked;
    }
  }

  private _onEnterEvent(event: KeyboardEvent) {
    if (event.key === "Enter") {
      // Trigger the click event
      this._handleClick();
    }
  }

  private _sendOnChangeEvent() {
    const options = {
      detail: {
        checked: this.checked,
      },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent("my-switch-change", options));
  }

  // Define the methods for the switch component
  private _handleClick(): void {
    // If the switch is not disabled, toggle its checked state
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  private _handleFocusEvent() {
    // If the switch is focused, send focus event
    if (!this.disabled) {
      const options = {
        bubbles: true,
        composed: true,
      };
      this.dispatchEvent(new CustomEvent("my-switch-focus", options));
    }
  }

  private _handleBlurEvent() {
    // If the switch is blur, send blur event
    if (!this.disabled) {
      const options = {
        bubbles: true,
        composed: true,
      };
      this.dispatchEvent(new CustomEvent("my-switch-blur", options));
    }
  }
  // Define the styles of the switch component
  static styles: CSSResult = switchStyles;
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("focus", this._handleFocusEvent);
    this.removeEventListener("blur", this._handleBlurEvent);
  }
}
