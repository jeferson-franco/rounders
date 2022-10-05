// We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.

// Example

// For n = 15, the output should be
// solution(n) = 20;

// For n = 1234, the output should be
// solution(n) = 1000.

// 1234 -> 1230 -> 1200 -> 1000.

// For n = 1445, the output should be
// solution(n) = 2000.

// 1445 -> 1450 -> 1500 -> 2000.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive integer.

// Guaranteed constraints:
// 1 ≤ value ≤ 108.

// [output] integer

// The rounded number.

function solution(n) {
    let num = n.toString().split('');
    let i = num.length - 1;
    while (i > 0) {
        if (num[i] >= 5) {
            num[i - 1] = (parseInt(num[i - 1]) + 1).toString();
        }
        num[i] = '0';
        i--;
    }
    return parseInt(num.join(''));
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test rounders

// alternative solution
