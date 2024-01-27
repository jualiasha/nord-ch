import { fixture } from "@open-wc/testing-helpers";
import { describe, expect, test, beforeEach } from "vitest";
import { html } from "lit";
import { Accordion } from "../components/accordion/Accordion.ts";
import "../components/accordion/my-fancy-acordion.ts";

describe("Accordion", async (): Promise<void> => {
  let element: Accordion;
  beforeEach(async (): Promise<void> => {
    element = await fixture<Accordion>(
      html`<my-fancy-accordion .title=${"My Title"}></my-fancy-accordion>`,
    );
  });
  test("should have expected default properties", async () => {
    expect(element.title).toBe("My Title");
    expect(element.open).toBeFalsy();
  });
  test("should toggle open and close states", async () => {
    element.click();
    setTimeout(() => expect(element.open).toBeTruthy(), 1000);
    setTimeout(() => element.click(), 1500);
    setTimeout(() => expect(element.open).toBeFalsy(), 2000);
  });
  test("should not display point circle if there is no numberPoint", async () => {
    const numberPoint = element.shadowRoot?.querySelector(".number-point");
    expect(numberPoint?.classList[1]).toBe("hidden");
    expect(element.numberPoint).toBeNull();
  });
});
