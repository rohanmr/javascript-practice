
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


//Oprator Precedence
let a= 10 + 3 * 5
let b= (10+3)*5
let c=20/2+3
let d=20/(2+3)

console.log("a:",a);
console.log("b:",b);
console.log("c:",c);
console.log("d:",d);

// Combined Example

let length =10
let width=5
let perimeter = 2 * (length + width)
console.log("Perimeter of rectangle:",perimeter);
 let area = length*width
 console.log("Area of rectangle:",area);

 console.log("is perimeter is grater tha area",perimeter>area)


// Complex logic and Comparison oprations

let age = 25
let isStudent = true
let canVote =( age >= 18) && isStudent
console.log("Is the person eligible to vote:",canVote);


//Find Even numbers
for(j=0;j<=20;j++){
    if(j%2==0){
        console.log("Even",j)
    }
}

//Find Odd numbers
for(j=0;j<=20;j++){
    if(j%2 !=0){
        console.log("odd",j)
    }
}

//BMI calculator
let height = 1.8
let weight = 80
let bmi = weight / height ** 2
console.log("BMI:",bmi);

if(bmi < 18.5){
    console.log("Underweight")
}else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("Normal")
}else{
    console.log("Overweight")
}

//Shopping Discount

let totalAmount=prompt("Enter the total amount")
 if (totalAmount/100){
    totalAmount-=totalAmount*0.1

 }

 console.log("discounted total:", totalAmount)