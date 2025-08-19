x=10;
y=5;


console.log("assition of  x and y :", x+y);
console.log("diffrance:",x-y);


fevorateMovi = "Spiderman";
message='I Love to watch ' + fevorateMovi;
console.log(message);

isHungry=false;

 if(isHungry){
    console.log("Eat healthy food"); //this print when ture
 }else{
    console.log("Continue with your work")
 }

 
let arr=[1,2,4,5]

let  num=arr.length +1
let actul_sum=0

const expected_sum=num * (num+1)/2

arr.forEach(n =>{
   actul_sum+=n
})

const missing_num = expected_sum - actul_sum 

console.log(expected_sum)
console.log(actul_sum)
console.log("Missign No is :",missing_num)