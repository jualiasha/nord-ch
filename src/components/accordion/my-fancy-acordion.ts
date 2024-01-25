import {Accordion} from "./Accordion.ts";

if (!customElements.get('my-fancy-accordion')) {
    customElements.define('my-fancy-accorddion', Accordion);
}
    declare global {
        interface HTMLElementTagNameMap {
            "my-fancy-accordion": Accordion;
        }
    }
