import type { Meta, StoryObj } from "@storybook/web-components";
import "../components/accordion/my-fancy-acordion.ts";
import Readme from "../components/accordion/README.md";
import { html, TemplateResult } from "lit";
import { Accordion } from "../components/accordion/Accordion.ts";

const getMyAccordion = (args: Accordion) => {
  return html` <style>
      span {
        transition: inherit;
      }
    </style>
    <my-fancy-accordion
      ?open=${args.open}
      .title=${args.title}
      .toggledText=${args.toggledText}
      .badge=${args.badge}
    >
      <span>Here will come content</span>
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
    badge: { control: "number" },
  },
} satisfies Meta<Accordion>;

export default meta;
type Story = StoryObj<Accordion>;

function TemplateWIthSeveralPanels(args: Accordion): TemplateResult {
  return html`
    <style>
      my-fancy-accordion {
        --accordion-margin-bottom: 0.5rem;
      }
    </style>
    ${getMyAccordion(args)}
    ${getMyAccordion({ ...args, title: "Loans", toggledText: "" } as Accordion)}
    ${getMyAccordion({
      ...args,
      title: "Contacts",
      badge: null,
      toggledText: "",
    } as Accordion)}
  `;
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Accounts && cards",
    open: false,
    toggledText: "available: 1300€",
    badge: 3,
  },
};

export const NoToggledText: Story = {
  args: {
    title: "Accounts && cards",
    open: false,
    toggledText: "",
    badge: 3,
  },
};

export const SeveralPanels: Story = {
  render: TemplateWIthSeveralPanels.bind({}),
};
SeveralPanels.args = {
  ...Primary.args,
};
