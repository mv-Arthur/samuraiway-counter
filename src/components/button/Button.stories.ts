import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
     title: "Components/Button",
     component: Button,
     parameters: {
          layout: "centered",
     },
     tags: ["autodocs"],

     args: { onClick: fn(), children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
     args: {
          children: "Button",
          type: "contained",
     },
};

export const Dangerous: Story = {
     args: {
          variant: "dangerous",
          type: "contained",
     },
};

export const Success: Story = {
     args: {
          variant: "success",
          type: "contained",
     },
};
