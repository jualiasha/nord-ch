import type { Meta, StoryObj } from "@storybook/web-components";
import "../components/accordion/my-fancy-acordion.ts";
import Readme from "../components/accordion/README.md";
import { html } from "lit";

interface IAccordion {
  title: string;
  open: boolean;
  toggledText: string;
  numberPoint: number;
}

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
  render: (args) =>
    html`<my-fancy-accordion
      ?open=${args.open}
      .title=${args.title}
      .toggledText=${args.toggledText}
      .numberPoint=${args.numberPoint}
    >
      Here will come content
    </my-fancy-accordion>`,
  argTypes: {
    title: { control: "text" },
    open: { control: "boolean" },
    toggledText: { control: "text" },
    numberPoint: { control: "number" },
  },
} satisfies Meta<IAccordion>;

export default meta;
type Story = StoryObj<IAccordion>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Accounts && cards",
    open: false,
    toggledText: "available: 1300€",
    numberPoint: 3,
  },
};
