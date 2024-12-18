import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";

const meta = {
     title: "Components/Label",
     component: Label,
     parameters: {
          layout: "centered",
     },
     tags: ["autodocs"],
     args: {
          text: "write text here",
          value: false,
     },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
     args: {
          offset: {
               x: 20,
               y: 20,
          },
          background: "#fff",
     },
};
