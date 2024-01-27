import type { Meta, StoryObj } from "@storybook/web-components";
import "../components/switch/my-switch.ts";
import Readme from "../components/switch/README.md";
import { html, TemplateResult } from "lit";
import { MySwitch } from "../components/switch/Switch.ts";

const getMySwitch = (args: MySwitch): TemplateResult => {
  return html` <my-switch
    .size=${args.size}
    ?checked=${args.checked}
    ?disabled=${args.disabled}
  >
  </my-switch>`;
};

const meta = {
  title: "Components/Switch",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  render: (args: MySwitch) => getMySwitch(args),
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<MySwitch>;

export default meta;
type Story = StoryObj<MySwitch>;

export const Default: Story = {
  args: {
    size: "medium",
    checked: true,
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    checked: true,
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    checked: true,
    disabled: false,
  },
};
