function countSmileys(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    const regex = /[:;][-~]?[)D]/;
  
    const count = arr.filter(face => regex.test(face)).length;
  
    return count;
  }
  
  module.exports = countSmileys;