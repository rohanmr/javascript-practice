function greeting(){
    console.log("Hii i am Rohan")
}

greeting();

// Finde Factorial

let result = 1
function factorial(n){{
    for(i=n;i>=1;i--){
        result=result * i
   }
    return result
}}

x=factorial(5)
console.log(x)

// To Check no is Even Or Odd

function checkEvenOdd(n){
    if(n % 2 == 0){
       return n +" " + "Number is Even"

    }else{
       return n + " "+  "Number is Odd"
    }
}
console.log(checkEvenOdd(5))


// Finde the largest number

function findeLargestNo(n1,n2,n3){
    if(n1 > n2 && n1 > n3){
        return n1 + " " + "n1 is largest"
    }else if( n2 > n1 && n2 > n3){
        return n2 + " " + " n2  is largest"
    }else{
        return n3 + " " + "n3  is largest"
    }
    
}

console.log(findeLargestNo(23,87,45))

// Find area and perimeter of ractangle

function AreaPerimeterReactangle(length,width){
    
    area=length*width
    perimeter = 2 * (length+width)
    
    return "Area is "+area + " Perimeter is "+ perimeter 
    
     
}

console.log(AreaPerimeterReactangle(26,63))

// Find GCD

function gcd(a,b){
    while(b!== 0){
        let temp = b
        b=a % b
        a = temp
    }
    return a;
}

console.log("GCD of number is:",gcd(12,15))


//Reverse the numbers
num=1234
let resversNum=0
function rever(n){
    n=Math.abs(n)
    while(n > 0){
        digit=n%10
        resversNum = resversNum * 10 + digit
        n = Math.floor(n / 10)
    }
    return resversNum
}

console.log(rever(num))