import { mergeConfig } from 'vite';

const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    staticDirs: ["../public"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    /*features: {
      legacyMdx1: true, // 👈 Enables MDX v1 support
    },*/
    async viteFinal(_config) {
        // Merge custom configuration into the default config
        return mergeConfig(_config, {
            optimizeDeps: {
                include: ["storybook-addon-designs"],
            },
        });
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
