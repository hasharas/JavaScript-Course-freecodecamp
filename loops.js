let number = [1,2,3,4,5,6,7];

// let indx = 0;
// let LengthOfArr = number.length;

// console.log(number[indx++]);
// console.log(number[indx]);
// console.log(number[indx]);
// console.log(number[indx]);
// console.log(number[indx]);
// console.log(number[indx]);
// console.log(number[indx]);

// for(let ind =0; ind<100; ind+=2){
//       console.log(ind);
// }

let numbers = [1, 2, 4, 5, 6, 8, 7];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    } else {
        oddNumbers.push(numbers[i]);
    }
}

console.log('Even numbers:', evenNumbers);
console.log('Odd numbers:', oddNumbers);