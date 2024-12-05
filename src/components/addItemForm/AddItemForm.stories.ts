import type { Meta, StoryObj } from "@storybook/react";

import { AddItemForm } from "./AddItemForm";
import { fn } from "@storybook/test";

const meta = {
     title: "Components/AddItemForm",
     component: AddItemForm,
     parameters: {
          layout: "centered",
     },
     tags: ["autodocs"],
     args: {},
} satisfies Meta<typeof AddItemForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
     args: {
          onSubmit: fn(),
     },
};
