import { fixture } from "@open-wc/testing-helpers";
import { describe, expect, test, beforeEach } from "vitest";
import { html } from "lit";
import { MyModal } from "../components/modal/Modal.ts";
import "../components/modal/my-modal.ts";

describe("Accordion", async (): Promise<void> => {
  let element: MyModal;
  beforeEach(async (): Promise<void> => {
    element = await fixture<MyModal>(
      html`<my-modal open>Hello world</my-modal>`,
    );
  });
  test("should have expected default properties", async () => {
    expect(element.open).toBeTruthy();
  });
  test("should close on pressing Escape button", async () => {
    const event = new KeyboardEvent("keypress", {
      key: "Escape",
      bubbles: true,
      composed: true,
    });
    document.dispatchEvent(event);
    setTimeout(() => expect(element.open).toBeFalsy(), 1000);
  });
  test("should close on pressing close button", async () => {
    const button = element.querySelector("button");
    button?.click();
    setTimeout(() => expect(element.open).toBeFalsy(), 1000);
  });
});
