//Check number is postive,negative or zero
// num=5

// if(num < 0){
//     console.log("Number is negative")
// }else if(num>0){
//     console.log("number is postive")
// }else{
//  console.log("Number is zero")
// }


//Find table of number or multiplication table
// n=15
// for(i=1;i<11;i++){
//     console.log(i,"*",n,"=",n*i)
// }


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



//Fizz Buzz


//Prime Nmber checker



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
// for(j=0;j<=20;j++){
//     if(j%2 !=0){
//         console.log(j)
//     }
// }


// Check Eligible to vote
// let age=20;
// if(age>=18){
//     console.log("Eligible to vote");
// }else{
//     console.log("Not eligible to vote");
// }


//Find Grade
// marks=35
// if(marks>=0 && marks <=100){
//     if(marks < 35){
//         console.log("Grade F")
//     }else if(marks >= 35 && marks <=50){
//         console.log("Grade C")
//     }else if(marks >=50 && marks <=70){
//         console.log("Grade B")
//     }else{
//         console.log("Grade A")
//     }
    
// }else{
//     console.log("invalid Marks")
// }

// n1=10
// n2=20
// op="add"
// result=0


// switch(op){
//     case "add":
//         result=n1+n2
//         break;
//     default:
//         console.log("Invalid Number")
// }

// console.log(n1,op,n2," = ",result)









//fibonacci using while loop
// a=0
// b=1
// i=0
// while(i<10){
//     console.log(a)
//     temp=a
//     a=b
//     b=temp+b
//     i++
// }




