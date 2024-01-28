import { LitElement, html, PropertyValues, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { modalStyles } from "./styles.ts";

@customElement("my-modal")
export class MyModal extends LitElement {
  // Define the properties and attributes of the modal component
  @property({ type: Boolean }) open = false; // The open state of the modal

  public title: string = "";
  private _dialog: null | HTMLDialogElement = null;
  private _handleEscKeyDown = this._handleKeydown.bind(this);

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("keydown", this._handleEscKeyDown); // Add a keydown listener
  }

  protected willUpdate(_changedProperties: PropertyValues) {
    if (
      _changedProperties.has("open") &&
      _changedProperties.get("open") !== undefined &&
      this._dialog
    ) {
      // If the open property has changed
      if (this.open) {
        // If the modal is open
        this._dialog.showModal(); // Show the dialog
      } else {
        // If the modal is closed
        this._dialog.close(); // Close the dialog
      }
    }
  }

  // Define the HTML template for the modal component
  render(): TemplateResult {
    return html`
      <dialog
        id="dialog"
        part="dialog"
        aria-labelledby="title"
        aria-modal="true"
        ?open=${this.open}
        @click=${this._handleClick}
      >
        <div part="header">
          <h2 id="title" part="title">${this.title}</h2>
          <button
            id="close"
            part="close"
            aria-label="Close"
            @click=${this._closeModal}
          >
            X
          </button>
        </div>
        ${when(this.open, () => html`<div part="content"><slot></slot></div>`)}
      </dialog>
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    this._dialog = this.renderRoot.querySelector("dialog");
  }

  private _handleKeydown(event: KeyboardEvent): void {
    // Handle the keydown event
    if (event.key === "Escape") {
      // If the escape key is pressed
      this._closeModal(); // Close the modal
    }
  }
  private _handleClick(event: MouseEvent): void {
    const rect: DOMRect | undefined = this._dialog?.getBoundingClientRect();
    if (rect) {
      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        this._closeModal();
      }
    }
  }

  private _closeModal(): void {
    // Close the modal
    this.open = false; // Set the open property to false
    this.dispatchEvent(new CustomEvent("my-modal-close")); // Dispatch a close event
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("keydown", this._handleEscKeyDown); // Remove the keydown listener
    this.removeEventListener("blur", this._closeModal);
  }

  // Define the CSS styles for the modal component
  static styles = modalStyles;
}
