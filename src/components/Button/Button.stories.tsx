import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fireEvent, userEvent, within } from '@storybook/testing-library';
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
          <div style={{ display: 'flex', width: 100+"%", justifyContent: "center", alignItems: "center" }}>
            <Story />
          </div>
        ),
      ],
    
    argTypes: {
        backgroundColor: { control: "color" },
        size: { control: { type: "inline-radio" } },
    },
    args: {
        size: "medium",
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        label: "Button Default",
    },
};

export const Primary: Story = {
    args: {
        primary: true,
        label: "Button Primary",
    },
};

export const Secondary: Story = {
    args: {
        primary: false,
        label: "Button Secondary",
    },
};

export const Large: Story = {
    args: {
        size: "large",
        label: "Button Large",
    },
};

export const Small: Story = {
    args: {
        size: "small",
        label: "Button Small",
    },
};

export const WithOnClick: Story = {
    args: {
        primary: false,
        label: "Button with onClick prop",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
    
        // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
        await userEvent.click(canvas.getByRole('button'));
      },
};