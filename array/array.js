arrayDemo = []
console.log(typeof (arrayDemo))


fruits = ['apple', 'mango', 'banana']

console.log(fruits.length)
console.log(fruits[fruits.length - 1])

fruits.push('Charry')
console.log(fruits)

fruits.unshift("Orange")
console.log(fruits)

fruits[3] = 'watermelon'
console.log(fruits)

fruits[fruits.length] = 'Grapes'
console.log(fruits)

console.log(fruits.pop(),"pop ")

console.log(fruits.shift(),"shift")

//slice  //splice

    console.log(fruits.slice(3, 5),'usign slice')

    console.log(fruits.splice(5, 2, 'paapya', 'kiwi', 'peru') ,"usign splice")

len = fruits.length
for (i = 0; i < len; i++) {
    console.log(`i like to eat ${fruits[i]}`)
}



numArray = [21, 23, 4, 56, 68, 45]
lenNum = numArray.length

for (x = 0; x < lenNum; x++) {
    console.log(numArray[x] * numArray[x])
}


for (z = 0; z < lenNum; z++) {
    if (numArray[z] % 2 == 0) {
        console.log("Even no", numArray[z])
    }
}
//Even and odd array
evenArray = []
oddArray = []
for (n = 0; n < lenNum; n++) {
    if (numArray[n] % 2 == 0) {
        evenArray.push(numArray[n])
    } else {
        oddArray.push(numArray[n])
    }
}
console.log(evenArray)
console.log(oddArray)

//Sum of array
sum = 0
for (i = 0; i < lenNum; i++) {
    sum = sum + numArray[i]
}
console.log(sum)

//Max num of array
maxNum = 0
secondLarg = 0
for (i = 0; i < lenNum; i++) {
    if (numArray[i] > maxNum) {
        maxNum = numArray[i]
    }
    for (j = 0; j < lenNum; j++) {
        if (numArray[j] < maxNum) {
            secondLarg = numArray[j]
        }
    }
    numArray.sort()
    //re=Math.max(numArray[i])
}
console.log(maxNum)
console.log(secondLarg)

//Crate a program to revers an arrray manually
reversArray = []
for (i = numArray.length - 1; i >= 0; i--) {
    reversArray.push(numArray[i])

}
console.log(reversArray)


//Create a function to merge two array without duplicates

arr1 = [10, 30, 50, 70, 90]
// arr2=[20,40,60,80,100]

// function mearge(arr1,arr2){

// }



for (x in arr1) {
    console.log(x)
}
for (y of arr1) {
    console.log(y)
}

arr1.map((ele, i) => console.log(ele, i))

arr1.map((v, i) => {
    console.log(v, i)
})

fruits.map((v, i) => console.log(v, i))

arr1.map((num) => console.log(num * num))

arr1.map((num) => {
    console.log("Square of num", num ** 2)
})




let items = ["Pen", "Book", "Eraser"];

// items.find()


let gadgets = ["Phone", "Tablet", "Laptop"];

let colors = ["Red", "Blue", "Green", "Yellow"];


let noarray = [10, 2, 44, 20, 8, 6, 98, 65, 66]

sum = noarray.reduce((sum, num) => sum + num, 0)
console.log(sum)
// noarray.filter((num)=>num % 2 ==0)
// console.log(noarray)

let eno = noarray.some((n) => n % 2 == 0)
console.log(eno)















