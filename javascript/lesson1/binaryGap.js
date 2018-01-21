// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let max = 0, count = 0;
    let binary = N.toString(2);
    binary.split("").forEach(element => {
        if (element == "1") {
          if (count > max) { max = count }
          count = 0;
          return;
        }
        count += 1;
    });
    return max;
}
