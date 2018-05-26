const { defaults } = require('jest-config');

module.exports = {
  transform: {
    "^.+\\.tsx?$": 'ts-jest'
  },
  testRegex: "/test/.*\\.test\\.(jsx?|tsx?)$",
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
}
