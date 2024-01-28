import { LitElement, html, css } from "lit";
import {
  customElement,
  property,
  query,
  eventOptions,
} from "lit/decorators.js";

@customElement("my-modal")
export class MyModal extends LitElement {
  // Define the properties and attributes of the modal component
  @property({ type: String }) title = ""; // The title of the modal
  @property({ type: Boolean, reflect: true }) open = false; // The open state of the modal
  @property({ type: String }) content = ""; // The content of the modal

  // Define the HTML template for the modal component
  render() {
    return html`
      <dialog
        id="dialog"
        part="dialog"
        aria-labelledby="title"
        aria-modal="true"
        ?open=${this.open}
      >
        <div part="header">
          <h2 id="title" part="title">${this.title}</h2>
          <button
            id="close"
            part="close"
            aria-label="Close"
            @click=${this.closeModal}
          >
            X
          </button>
        </div>
        <div part="content">${this.content}</div>
      </dialog>
    `;
  }

  // Define the CSS styles for the modal component
  static styles = css`
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

  // Define the lifecycle methods and event handlers for the modal component
  @query("#dialog") dialog!: HTMLDialogElement; // Get the dialog element

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("keydown", this.handleKeydown); // Add a keydown listener
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("keydown", this.handleKeydown); // Remove the keydown listener
  }

  updated(changedProperties: any) {
    super.updated(changedProperties);
    if (changedProperties.has("open")) {
      // If the open property has changed
      if (this.open) {
        // If the modal is open
        this.dialog.showModal(); // Show the dialog
        this.dialog.focus(); // Focus the dialog
      } else {
        // If the modal is closed
        this.dialog.close(); // Close the dialog
      }
    }
  }

  @eventOptions({ passive: true })
  handleKeydown(event: KeyboardEvent) {
    // Handle the keydown event
    if (event.key === "Escape") {
      // If the escape key is pressed
      this.closeModal(); // Close the modal
    }
  }

  closeModal() {
    // Close the modal
    this.open = false; // Set the open property to false
    this.dispatchEvent(new CustomEvent("close")); // Dispatch a close event
  }
}
