import { MySwitch } from "./Switch.ts";

if (!customElements.get("my-switch")) {
  customElements.define("my-switch", MySwitch);
}
declare global {
  interface HTMLElementTagNameMap {
    "my-switch": MySwitch;
  }
}
