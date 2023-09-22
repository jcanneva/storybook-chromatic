module.exports = componentName => ({
    content: `\
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ${componentName} from "./${componentName}";\

const meta: Meta<typeof ${componentName}> = {
    title: "Components/${componentName}",
    component: ${componentName},
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
};

export default meta;

type Story = StoryObj<typeof ${componentName}>;

/** JSDocs for autodocs*/
export const Example: Story = {
    args: {
        className: "className",
    },
};
`,
    extension: `.stories.tsx`,
});
