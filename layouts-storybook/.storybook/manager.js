import { addons } from '@storybook/addons'

const theme = {
  appBg: '#F6F9FC',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,
  appContentBg: '#FFFFFF',
  barBg: '#FFFFFF',
  barSelectedColor: '#1EA7FD',
  barTextColor: '#999999',
  base: 'light',
  colorPrimary: '#FF4785',
  colorSecondary: '#1EA7FD',
  fontBase: 'Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'Operator Mono", "Fira Code Retina", "Fira Code", "FiraCode-Retina", "Andale Mono", "Lucida Console", Consolas, Monaco, monospace',
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.1)',
  inputBorderRadius: 4,
  inputTextColor: '#333333',
  textColor: '#333333',
  textInverseColor: '#FFFFFF'
}

addons.setConfig({
  theme
})