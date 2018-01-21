// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
        var count = {};
    A.forEach(element => {
      if(count[element]) {
        count[element]++
      } else {
        count[element] = 1;
      }
    });
    var key = Object.keys(count).filter(key => {
      return count[key] % 2 == 1
    });
    return parseInt(key);
}
