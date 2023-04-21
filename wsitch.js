// 1. Write a program that uses a while loop to

function factorial (number){
    let answer= 1;
    while (number > 0){
        answer *= number;
        number --
    }
    return answer;
}
console.log(factorial(6));



// 2. Write a programme that uses a break statement to exit a loop
//  when a specific value is found in an array.

let arry = [13, 56, 34, 42, 64, 13];
for (let x = 0; x < arry.length; x++)
if(arry [x] === 34){
    console.log(34 + x);
    break;
}
console.log(arry)



// 3. Write a program that uses a continue statement to skip over 
// negative numbers in an array and only print positive numbers.

const number = [22, -5, -23, 68, 23, -34];

for (let i = 0; i < number.length; i++) {
  if (number[i] < 0) {
    continue; 
  }
  console.log(number[i]);
}



// 4. Write a program that uses a switch statement to determine the
//  grade of a student based on their percentage.

const percentage = 73;
let grade;

switch (true) {
  case percentage >= 95:
    grade = 'A';
    break;
  case percentage >= 83:
    grade = 'B';
    break;
  case percentage >= 75:
    grade = 'C';
    break;
  case percentage >= 63:
    grade = 'D';
    break;
  default:
    grade = 'F';
}

console.log(`Your grade is ${grade}`);
// console.log(percentage)
