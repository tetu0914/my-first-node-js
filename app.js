'use strict';
const number = process.argv[2] || 0;
let sum = 0;

for (let i = 1; i <= number; i++){
    //console.log(sum);
    sum = sum + i;
}

console.log(sum);
