import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    decorators: [
        Story => (
            <div
                style={{
                    display: "flex",
                    width: 100 + "%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
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
        onClick: undefined,
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

/** Primary button whit prop primary true*/
export const Primary: Story = {
    args: {
        label: "Button Primary",
    },
};

/** Secondary button whit prop primary false*/
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
        label: "Button with onClick prop",
        onClick: () => alert("Button clicked"),
    },
    play: ({ canvasElement }) => {
        const canvas = within(canvasElement);

        userEvent.click(canvas.getByRole("button"));
    },
};
