import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { Input } from "./Input";
import { fn } from "@storybook/test";

const meta = {
     title: "Components/Input",
     component: Input,
     parameters: {
          layout: "centered",
     },
     tags: ["autodocs"],
     args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
     args: {
          label: "write text here",
          onChange: fn(),
          value: "432432",
     },

     render: (args) => {
          const [{ value }, updateArgs] = useArgs();

          const onChangeHandler = (value: string) => {
               updateArgs({ value });
          };

          return <Input {...args} value={value} onChange={onChangeHandler} />;
     },
};
