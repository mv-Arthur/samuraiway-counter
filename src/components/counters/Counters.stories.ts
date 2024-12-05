import type { Meta, StoryObj } from "@storybook/react";

import { Counters } from "./Counters";

const meta = {
     title: "Components/Counters",
     component: Counters,
     parameters: {
          layout: "centered",
     },
     tags: ["autodocs"],
     args: {},
} satisfies Meta<typeof Counters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
     args: {},
};
