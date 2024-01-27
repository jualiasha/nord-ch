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
    ?required=${args.required}
    @my-switch-change=${(e: { detail: { checked: boolean } }) =>
      console.log(e.detail.checked)}
    @my-switch-focus=${() => console.log("focused")}
    @my-switch-blur=${() => console.log("blured")}
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
    required: { control: "boolean" },
  },
} satisfies Meta<MySwitch>;

export default meta;
type Story = StoryObj<MySwitch>;

export const Default: Story = {
  args: {
    size: "medium",
    checked: false,
    disabled: false,
    required: false,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
};
