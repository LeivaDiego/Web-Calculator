/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false
      }
    },
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
}
export default config
