module.exports = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  testRegex: './test/.*\\.(test|spec)?\\.(js)$',
  moduleFileExtensions: ['js'],
  roots: ['<rootDir>/test'],
};