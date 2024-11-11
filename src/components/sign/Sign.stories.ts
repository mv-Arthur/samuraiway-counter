import type { Meta, StoryObj } from "@storybook/react";

import { Sign } from "./Sign";

const meta = {
     title: "Components/Icons/Sign",
     component: Sign,
     parameters: {
          layout: "centered",
     },
     tags: ["autodocs"],
     argTypes: {
          color: { control: "color" },
     },
} satisfies Meta<typeof Sign>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
     args: {
          value: "minus",
          size: 20,
          color: "#fff",
     },
};
