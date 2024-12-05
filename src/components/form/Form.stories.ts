import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "./Form";
import { fn } from "@storybook/test";

const meta = {
     title: "Components/Form",
     component: Form,
     parameters: {
          layout: "centered",
     },
     tags: ["autodocs"],
     args: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
     args: {
          onSubmit: fn(),
     },
};
