import {
  css,
  CSSResult,
  html,
  LitElement,
  PropertyValues,
  TemplateResult,
} from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";

@customElement("my-fancy-accordion")
export class Accordion extends LitElement {
  // Define the properties of the element

  @property({ type: Boolean })
  public open = false; // The state of the accordion (open or closed)
  @property({ type: String })
  public toggledText = ""; // The text for middle toggled text

  // The title for the accordion panel
  public title: string = "";
  // The number for numberPoint
  public numberPoint: number | null = null;
  // query for accordion panel
  private _panel: HTMLElement | null = null;

  protected willUpdate(_changedProperties: PropertyValues) {
    console.log(_changedProperties);
  }

  // Define the template of the element
  render(): TemplateResult {
    const classes = {
      hidden: !this.numberPoint,
    };
    return html`
      <div
        role="button"
        tabindex="0"
        class="accordion"
        part="accordion"
        @click="${this.toggleAccordionPanel}"
        @keydown=${this.onEnterEvent}
      >
        <div class="title no-wrap">${this.title}</div>
        <div class="number-point ${classMap(classes)}">${this.numberPoint}</div>
        <div class="toggled-text no-wrap">${this.toggledText}</div>
        <sl-icon name=${this.open ? "caret-down" : "caret-up"}></sl-icon>
      </div>
      <div class="panel" part="panel">
        <slot></slot>
      </div>
    `;
  }

  protected firstUpdated(): void {
    this._panel = this.renderRoot.querySelector(".panel"); // Get the panel element
  }

  private onEnterEvent(event: KeyboardEvent) {
    if (event.key === "Enter") {
      // Trigger the click event
      this.toggleAccordionPanel();
    }
  }

  // Define the method to toggle the accordion state
  private toggleAccordionPanel(): void {
    this.open = !this.open; // Toggle the open property
    if (this._panel) {
      if (this.open) {
        // If the accordion is open, set the max-height && padding to the scroll height of the panel
        this._panel.style.maxHeight = this._panel.scrollHeight + "px";
        this._panel.style.padding = "1rem";
      } else {
        // If the accordion is closed, set the max-height && padding to 0
        this._panel.style.maxHeight = "0";
        this._panel.style.padding = "0";
      }
    }
  }

  static styles: CSSResult = css`
    .accordion {
      background-color: var(--my-light-black);
      color: var(--white);
      cursor: pointer;
      padding: 18px;
      border: 1px solid #000;
      text-align: left;
      outline: none;
      transition: 0.4s;
      display: grid;
      grid-template-columns: min-content 2rem auto 2rem;
      grid-template-rows: 1fr;
      column-gap: 0.1rem;
      border-radius: 10px;
      margin-bottom: var(--accordion-margin-bottom, 0);
    }
    .accordion:focus {
      border: 5px solid var(--my-violet-blue);
    }
    .toggled-text {
      display: flex;
      justify-content: center;
      color: #c0c0c0;
    }
    .number-point {
      background-color: var(--my-violet-blue);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 1.5rem;
      border-radius: 1rem;
      color: var(--white);
      position: relative;
      bottom: 0.7rem;
      font-size: 14px;
    }

    .no-wrap {
      white-space: nowrap;
    }

    .panel {
      padding: 0;
      max-height: 0;
      background: var(--my-light-black);
      opacity: 0.95;
      overflow: hidden;
      transition: max-height 0.2s ease-out;
      position: relative;
      bottom: 0.7rem;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      color: var(--white);
    }
    .hidden {
      visibility: hidden;
    }
  `;
}
