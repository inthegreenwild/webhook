module.exports = {
  stories: [
    "../css/**/*.stories.mdx",
    "../vue3/**/*.stories.@(js|jsx|ts|tsx)",
    "../css/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/vue",
};
