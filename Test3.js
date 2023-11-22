function findOdd(arr) {
    const countMap = new Map();
  
    // Count occurrences of each number in the array
    arr.forEach(num => {
      if (countMap.has(num)) {
        countMap.set(num, countMap.get(num) + 1);
      } else {
        countMap.set(num, 1);
      }
    });
  
    // Find the number with odd occurrences
    for (const [num, count] of countMap.entries()) {
      if (count % 2 !== 0) {
        return num;
      }
    }
  }
  module.exports = findOdd;