import type { Meta, StoryObj } from "@storybook/react";

import { Status } from "./Status";

const meta = {
     title: "Components/Icons/Status",
     component: Status,
     parameters: {
          layout: "centered",
     },
     tags: ["autodocs"],
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
     args: {
          type: "success",
     },
};
