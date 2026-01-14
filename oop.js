//Object
const student = {
    name: "Rohan",
    age: 24,
    study: function () {
        return console.log(this.name + " " + "studying..")
    }

}

student.study()

//Using Constructor

class car {
    constructor(company, color) {
        this.company = company
        this.color = color
    }
    drive() {
        console.log(this.company + " car is driving")
    }
}

const car1 = new car("BMW", "Black")
const car2 = new car("Tata", "white")

console.log(car1.color)
car1.drive()


// OOP Four Concepts 

// Encapsulation

class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    deposit(amount) {
        this.#balance += amount;

    }
    getBalance() {
        return this.#balance
    }
}


const acc = new BankAccount(1000)

acc.deposit(500)

console.log(acc.getBalance())




// revers string

function reverseString(inputStr) {
    result = ""

    for (let i = inputStr.length - 1; i >= 0; i--) {
        result = result + inputStr[i]

    }

    return result
}

console.log(reverseString("Rohan"))


numArray = [2, 5, 7, 9, 12, 30]

function reverseArray(arr) {
    result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}

rev = reverseArray(numArray)

console.log(rev)

// Sum of digit
num = 123
sum = 0
while (num > 0) {
    digit = num % 10
    sum = sum + digit
    num = Math.floor(num / 10)
}

console.log(sum)

// Revers number as Number

let no = 123

let str = no.toString()

revStr = ""

for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i]
}

rev = Number(revStr)

console.log(rev)



