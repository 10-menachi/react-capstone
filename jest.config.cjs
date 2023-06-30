module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.module\\.css$': 'jest-css-modules',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(jest-css-modules)/)',
  ],

  testEnvironment: 'jsdom',
};
