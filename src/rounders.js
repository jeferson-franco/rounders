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
