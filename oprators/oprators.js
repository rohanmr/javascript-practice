
// Simple Arithmatic Program

let = num1=parseInt(prompt("Enter the number 1"));
let = num2=parseInt(prompt("Enter the number 2"));
console.log("Addition of the number is",num1+num2);
console.log("Subtraction of the number is",num1-num2);
console.log("Multiplication of the number is",num1*num2);
console.log("Division of the number is",num1/num2);
console.log("Modulus of the number is",num1%num2);


//Simple Comaparison Program

console.log("Is first number is graterthen second:", num1>num2);
console.log("Is first number is lessthen second:", num1<num2);
console.log("Is first number is equal to second:", num1==num2);
console.log("Is first number is tripal equal to second:", num1===num2);


//Logical Oprators

let mathScore=parseInt(prompt("Enter the math score:"));
let scienceScore=parseInt(prompt("Enter the sceience score:") );

let isEligible=(mathScore>=70 && scienceScore>=80);
console.log("Schoolership Eligible:",isEligible);



//Assignment Oprators

let x=10;
console.log("Initial value of x:",x);

x+=5;
console.log("value of x after adding 5:",x);

x-=5;
console.log("value of x after substacting 5:",x);

x*=5;
console.log("vlaur of x after multiplying 5:",x);

x/=2;
console.log("value of x after dividing 2:",x);

x%=2;
console.log("value of x after modulus 5;",x);