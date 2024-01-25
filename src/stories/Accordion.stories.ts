import type { Meta, StoryObj } from '@storybook/web-components';
import '../components/accordion/my-fancy-acordion.ts';
import Readme from '../components/accordion/README.md';
import {html} from "lit";


interface IAccordion{
    title: string,
    open:boolean
}

const meta = {
    title: 'Components/Accordion',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: Readme
            }
        }
    },
    render: args =>
        html`<my-fancy-accordion
      ?open=${args.open}
      title=${args.title}>
            Here will come content
    </my-fancy-accordion>`,
    argTypes: {
        title: { control: 'text' },
        open: { control: 'boolean' },
    },
} satisfies Meta<IAccordion>;

export default meta;
type Story = StoryObj<IAccordion>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Accounts && cards',
        open: false,
    },
};

//export const Secondary: Story = {
//    args: {
//        label: 'Button',
//    },
//};
//
//export const Large: Story = {
//    args: {
//        size: 'large',
//        label: 'Button',
//    },
//};
//
//export const Small: Story = {
//    args: {
//        size: 'small',
//        label: 'Button',
//    },
//};
