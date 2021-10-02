let sum = 0;
console.time('Loop');
for (let i = 0; i < 10000000; i++) {
    sum += 1;
};
console.timeEnd('Loop');
let sum2 = 0;
console.time('Loop2');
for (let j = 0; j < 10000000; j++) {
    sum2 += 1;
};
console.timeEnd('Loop2');