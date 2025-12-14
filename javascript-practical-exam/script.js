str = "Hello World From Wisdom Sprouts IT Training Hub"

function reversStr(str) {
    string = str.split(" ")

    newString = string.map((w) => w.split("").reverse().join(""))

    return newString.join(" ")

}
result = reversStr(str)

console.log(result)



// Write a function that takes a paragraph of text, normalizes it to lowercase, strips out all
// punctuation, splits it into words, and returns an object where each distinct word maps to the
// number of times it appears. 

str = "Learning JavaScript is fun Fun and easy to learn JavaScript"

function countDistinctWord(str) {
    string = str.split(" ")
    const count = {}

    string.map(word => {
        if (word) {
            count[w] = (count[w] || 0) + 1

        }
    })

    return count

}


result = countDistinctWord(str)
console.log(result)

// Create a function that receives an array of user objects, each having a name and age property. 
// The function should return only those users whose age is strictly greater than 18.

users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 }
]


function checkAge(users) {
    userAge = []
    users.map((user) => {
        if (user.age <= 18) {
            return
        } else {
            userAge.push(user)
        }
    })
    return userAge
}

result = checkAge(users)
console.log(result)

// Create a function that takes an array of product objects where each product has a name and
// price. Sort the products in ascending order based on price.

