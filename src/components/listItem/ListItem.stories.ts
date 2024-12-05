import type { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "./ListItem";

const meta = {
     title: "Components/ListItem",
     component: ListItem,
     parameters: {
          layout: "centered",
     },
     tags: ["autodocs"],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
     args: {
          message: "anymore else",
          variant: "BORDER",
     },
};
