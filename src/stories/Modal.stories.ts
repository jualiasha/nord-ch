import type { Meta, StoryObj } from "@storybook/web-components";
import "../components/modal/my-modal.ts";
import Readme from "../components/modal/README.md";
import { html, TemplateResult } from "lit";
import { MyModal } from "../components/modal/Modal.ts";

const getMyModal = (args: MyModal): TemplateResult => {
  return html` <my-modal .title=${args.title} ?open=${args.open}>
    Here comes my super content
  </my-modal>`;
};

const meta = {
  title: "Components/Modal",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  render: (args: MyModal) => getMyModal(args),
  argTypes: {
    title: { control: "text" },
    open: { control: "boolean" },
  },
} satisfies Meta<MyModal>;

export default meta;
type Story = StoryObj<MyModal>;

function TemplateWIthButton(args: MyModal): TemplateResult {
  return html`
    <button id="modalOpen">Open Modal</button>
    ${getMyModal(args)}
  `;
}

export const Default: Story = {
  args: {
    title: "Hello world",
    open: true,
  },
};

export const WithButton: Story = {
  render: TemplateWIthButton.bind({}),
};
WithButton.args = {
  ...Default.args,
  open: false,
};
WithButton.play = (): void => {
  const button = document.querySelector("#modalOpen");
  const myModal = document.querySelector("my-modal");
  if (button && myModal) {
    button.addEventListener("click", function () {
      if (myModal) {
        myModal.open = true;
      }
    });
  }
};
