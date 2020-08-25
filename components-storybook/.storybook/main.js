const path = require('path')

module.exports = {
  stories: ['../stories/**/index.js'],
  addons: [
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: async(config, { configType }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    })
    return config
  }
}
