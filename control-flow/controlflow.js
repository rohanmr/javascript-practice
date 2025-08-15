
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

//Find table of number
n=15
for(i=1;i<11;i++){
    console.log(i,"*",n,"=",n*i)
}

//Find even number

for(j=0;j<=20;j++){
    if(j%2==0){
        console.log(j)
    }
}

//Find Odd numbers
for(j=0;j<=20;j++){
    if(j%2 !=0){
        console.log(j)
    }
}


//Check number is postive,negative or zero
num=5

if(num < 0){
    console.log("Number is negative")
}else if(num>0){
    console.log("number is postive")
}else{
 console.log("Number is zero")
}


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



//L
