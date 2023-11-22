// smileyFaces.test.js
const countSmileys = require('./Test4');

test('countSmileys should count the number of smiling faces', () => {
  expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2);
  expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3);
  expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  expect(countSmileys([])).toBe(0);
});
