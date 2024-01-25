import {css, html, LitElement, PropertyValues, TemplateResult} from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement("my-fancy-accordion")
export class Accordion extends LitElement {

    // Define the properties of the element
    @property({ type: String })
    public title = 'Accordion Title'; // The title of the accordion
    @property({ type: Boolean })
    public open = false; // The state of the accordion (open or closed)


    private _panel:HTMLElement |null=null

    protected willUpdate(_changedProperties: PropertyValues) {
        console.log(_changedProperties)
    }

    // Define the template of the element
    render():TemplateResult {
        return html`
      <button class="accordion" part="accordion" @click="${this.toggle}">${this.title}</button>
      <div class="panel" part="panel">
        <slot></slot>
      </div>
    `;
    }

    protected firstUpdated():void {
       this._panel = this.renderRoot.querySelector('.panel'); // Get the panel element
    }

    // Define the method to toggle the accordion state
    private toggle():void {
        this.open = !this.open; // Toggle the open property
        //this.requestUpdate(); // Request an update to re-render the element
        if(this._panel){
            if (this.open ) {
                // If the accordion is open, set the max-height to the scroll height of the panel
                this._panel.style.maxHeight = this._panel.scrollHeight + 'px';
            } else {
                // If the accordion is closed, set the max-height to 0
                this._panel.style.maxHeight = '0';
            }
        }

    }

    static styles=css `
    .accordion {
          background-color: #eee;
          color: #444;
          cursor: pointer;
          padding: 18px;
          width: 100%;
          border: none;
          text-align: left;
          outline: none;
          font-size: 15px;
          transition: 0.4s;
        }
        
        .panel {
          padding: 0 18px;
          background-color: white;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.2s ease-out;
        }`
}

