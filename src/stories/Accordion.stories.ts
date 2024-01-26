import type { Meta, StoryObj } from "@storybook/web-components";
import "../components/accordion/my-fancy-acordion.ts";
import Readme from "../components/accordion/README.md";
import { html, TemplateResult } from "lit";

interface IAccordion {
  title: string;
  open: boolean;
  toggledText: string;
  numberPoint: number | null;
}

const getMyAccordion = (args: IAccordion) => {
  return html`<my-fancy-accordion
    ?open=${args.open}
    .title=${args.title}
    .toggledText=${args.toggledText}
    .numberPoint=${args.numberPoint}
  >
    Here will come content
  </my-fancy-accordion>`;
};

const meta = {
  title: "Components/Accordion",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  render: (args) => getMyAccordion(args),
  argTypes: {
    title: { control: "text" },
    open: { control: "boolean" },
    toggledText: { control: "text" },
    numberPoint: { control: "number" },
  },
} satisfies Meta<IAccordion>;

export default meta;
type Story = StoryObj<IAccordion>;

function TemplateWIthSeveralPanels(args: IAccordion): TemplateResult {
  return html`
    <style>
      my-fancy-accordion {
        --accordion-margin-bottom: 0.5rem;
      }
    </style>
    ${getMyAccordion(args)}
    ${getMyAccordion({ ...args, title: "Loans", toggledText: "" })}
    ${getMyAccordion({
      ...args,
      title: "Contacts",
      numberPoint: null,
      toggledText: "",
    })}
  `;
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Accounts && cards",
    open: false,
    toggledText: "available: 1300€",
    numberPoint: 3,
  },
};

export const NoToggledText: Story = {
  args: {
    title: "Accounts && cards",
    open: false,
    toggledText: "",
    numberPoint: 3,
  },
};

export const SeveralPanels: Story = {
  render: TemplateWIthSeveralPanels.bind({}),
};
SeveralPanels.args = {
  ...Primary.args,
};
