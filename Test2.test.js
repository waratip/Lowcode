const permutations = require("./Test2");

describe("permutations", () => {
  it('should return ["a"] for input "a"', () => {
    expect(permutations("a")).toEqual(["a"]);
  });

  it('should return ["ab", "ba"] for input "ab"', () => {
    expect(permutations('ab')).toEqual(['ab', 'ba']);
  });

  it('should return ["abc", "acb", "bac", "bca", "cab", "cba"] for input "abc"', () => {
    expect(permutations('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  });

  it('should return ["aabb", "abab", "abba", "baab", "baba", "bbaa"] for input "aabb"', () => {
    expect(permutations('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
  });

});