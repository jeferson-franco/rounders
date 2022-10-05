const solution = require('./rounders.js');

test('test 1', () => {
    expect(solution(15)).toBe(20);
});

test('test 2', () => {
    expect(solution(1234)).toBe(1000);
});

test('test 3', () => {
    expect(solution(1445)).toBe(2000);
});

test('test 4', () => {
    expect(solution(14)).toBe(10);
});

test('test 5', () => {
    expect(solution(10)).toBe(10);
});

test('test 6', () => {
    expect(solution(7001)).toBe(7000);
});

test('test 7', () => {
    expect(solution(99)).toBe(100);
});
