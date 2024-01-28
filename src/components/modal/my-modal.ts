import { MyModal } from "./Modal.ts";

if (!customElements.get("my-modal")) {
  customElements.define("my-modal", MyModal);
}
declare global {
  interface HTMLElementTagNameMap {
    "my-modal": MyModal;
  }
}
