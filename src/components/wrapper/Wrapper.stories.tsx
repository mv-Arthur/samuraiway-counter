import type { Meta, StoryObj } from "@storybook/react";
import { Wrapper } from "./Wrapper";
import { Counter } from "../counter/Counter";

const meta: Meta<typeof Wrapper> = {
     title: "Components/Wrapper",
     component: Wrapper,

     parameters: {
          layout: "centered",
     },
     tags: ["autodocs"],
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof Wrapper>;

export const Default: Story = {
     args: {
          children: <Counter id={"1"} />,

          id: "1",
     },
};
