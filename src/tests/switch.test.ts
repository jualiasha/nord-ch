import { fixture } from "@open-wc/testing-helpers";
import { describe, expect, test, beforeEach } from "vitest";
import { html } from "lit";
import { MySwitch } from "../components/switch/Switch.ts";
import "../components/switch/my-switch.ts";

describe("Accordion", async (): Promise<void> => {
  let element: MySwitch;
  beforeEach(async (): Promise<void> => {
    element = await fixture<MySwitch>(html`<my-switch></my-switch>`);
  });
  test("should have expected default properties", async () => {
    expect(element.size).toBe("medium");
    expect(element.checked).toBeFalsy();
  });
  test("should toggle on and off states", async () => {
    element.click();
    setTimeout(() => expect(element.checked).toBeTruthy(), 1000);
    setTimeout(() => element.click(), 1500);
    setTimeout(() => expect(element.checked).toBeFalsy(), 2000);
  });
  test("should not toggle on disabled switch", async () => {
    element.disabled = true;
    element.click();
    setTimeout(() => expect(element.checked).toBeFalsy(), 1000);
    setTimeout(() => element.click(), 1500);
    setTimeout(() => expect(element.checked).toBeFalsy(), 2000);
  });
});
