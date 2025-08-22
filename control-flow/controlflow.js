//Check number is postive,negative or zero
num=5

if(num < 0){
    console.log("Number is negative")
}else if(num>0){
    console.log("number is postive")
}else{
 console.log("Number is zero")
}


//Find table of number or multiplication table
n=15
for(i=1;i<11;i++){
    console.log(i,"*",n,"=",n*i)
}


// Number Guessing Game
let computerNum= Math.floor(Math.random()*10 + 1)
let usernumber = 6

if(computerNum < usernumber){
    console.log("number is high")
}else if(computerNum > usernumber){
    console.log("number is low")
}else if(computerNum == usernumber){
    console.log("You guess the number")
}else{
    console.log("Wrong Input")
}


//Find even number or Print even numbers

for(j=0;j<=20;j++){
    if(j%2==0){
        console.log("Even no:",j)
    }
}

//Sum of degits
let num=123

sum=0
Math.abs(num)
while(num > 0 ){
   digit=num % 10
   sum=sum+digit
   num= Math.floor(num/10)
}
console.log(sum)

// x=String(num).split('').map(Number)

// console.log(x)

// sum=0

// x.forEach(n => {
//     sum+=n
    
// });

// console.log("Sum of numbers is",sum)




//Fizz Buzz Program


for( i=1 ; i <= 20 ; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzBuzz")
    }else if( i % 3 == 0){
        console.log("Fizz")
    }else if(i%5==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}


//Prime Nmber checker

function checkPrime(n){
    if(n<0)return "negative number"
    if(n == 1)return "Number is prime no"
    if(n == 2)return "Number is prime no"
    
    if(n % 2 != 0 && n % n == 0){
      return "Number is prime no"
    }else{
        return "It is not prime no"
    }
}

console.log(checkPrime(19))


//Sum of Odd and Even no 
let evenNO=0
let  oddNo =0
for(i=1 ; i<=100 ;i++){
    if(i % 2 == 0){
        evenNO=evenNO+i
    }else{
        oddNo=oddNo+i
    }

}

console.log(evenNO)
console.log(oddNo)

// Armstrong no

let no = 153;          
let original = no;     
sum = 0;           

while (no > 0) {
    let dig = no % 10;                
    sum = sum + Math.pow(dig, 3);     
    no = Math.floor(no / 10);           
}

if (original === sum) {
    console.log("Armstrong No");
} else {
    console.log("Not Armstrong No");
}



//Star Pattern


//Find the largest of three no

let num1=4
let num2=16
let num3=9

if(num1>num2 && num1 > num3){
    console.log('Number 1 is grater',num1)

}else if(num2 > num1 && num2 > num3){
    console.log("number 2 is grater",num2)
}else if(num3 > num1 && num3 > num2 ){
    console.log("number 3 is grater",num3)
}

//Find Odd numbers
for(j=0;j<=20;j++){
    if(j%2 !=0){
        console.log(j)
    }
}


// Check Eligible to vote
let age=20;
if(age>=18){
    console.log("Eligible to vote");
}else{
    console.log("Not eligible to vote");
}


//Find Grade
marks=35
if(marks>=0 && marks <=100){
    if(marks < 35){
        console.log("Grade F")
    }else if(marks >= 35 && marks <=50){
        console.log("Grade C")
    }else if(marks >=50 && marks <=70){
        console.log("Grade B")
    }else{
        console.log("Grade A")
    }
    
}else{
    console.log("invalid Marks")
}

n1=10
n2=20
op="add"
result=0


switch(op){
    case "add":
        result=n1+n2
        break;
    default:
        console.log("Invalid Number")
}

console.log(n1,op,n2," = ",result)



//fibonacci using while loop
a=0
b=1
i=0
while(i<10){
    console.log(a)
    temp=a
    a=b
    b=temp+b
    i++
}




