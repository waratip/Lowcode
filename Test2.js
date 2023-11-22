function permutations(input) {
    const result = new Set();
  
    function generatePermutations(current, remaining) {
      if (remaining.length === 0) {
        result.add(current);
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        const char = remaining[i];
        const newCurrent = current + char;
        const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
        generatePermutations(newCurrent, newRemaining);
      }
    }
  
    generatePermutations('', input);
  
    return Array.from(result);
  }

  module.exports = permutations;