const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)", // Additional stories folder
  ],

  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        controls: true, // Enables Controls addon
        actions: true, // Enables Actions addon
        docs: true, // Enables Docs addon
      },
    },
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
};

export default config;
