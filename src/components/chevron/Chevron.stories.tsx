import type { Meta, StoryObj } from "@storybook/react";

import { Chevron } from "./Chevron";

const meta = {
     title: "Components/Icons/Chevron",
     component: Chevron,
     parameters: {
          layout: "centered",
     },
     tags: ["autodocs"],
     args: {},
} satisfies Meta<typeof Chevron>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
     args: {
          value: false,
     },
};
