import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";

const meta = {
     title: "Components/List",
     component: List,
     parameters: {
          layout: "centered",
     },
     tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HaveAError: Story = {
     args: {
          errors: [
               {
                    status: true,
                    message: "settings form should be fullfiled",
                    variant: "FIELD",
               },
               {
                    status: true,
                    message: "the upper limit should not be less than or equal to the lower limit, and vice versa ",
                    variant: "BORDER",
               },
               {
                    status: true,
                    message: "step value must not be less than zero",
                    variant: "STEP",
               },
          ],
     },
};

export const WithoutError: Story = {
     args: {
          errors: [
               {
                    status: false,
                    message: "settings form should be fullfiled",
                    variant: "FIELD",
               },
               {
                    status: false,
                    message: "the upper limit should not be less than or equal to the lower limit, and vice versa ",
                    variant: "BORDER",
               },
               {
                    status: false,
                    message: "step value must not be less than zero",
                    variant: "STEP",
               },
          ],
     },
};
