// const emp = {
//     empName: "harsh",
//     empAddress: {
//         city: "Indor",
//         pincode: "452001"
//     },
//     empEmail: "harsh@gmail.com",
//     phoneNumber: "1321546556",
//     sal: 223458678,
//     projectlist: ['erp-portal', 'gameApplication', 'sportsWebsite']
// }


// const { empName, empAddress, sal, projectlist } = emp


// console.log(emp.empName)

// console.log(emp.empAddress.city)
// console.log(emp.empAddress.pincode)

// console.log(emp.sal)

//const harshProject = emp.projectlist.map((i) => console.log(i))

// console.log(harshProject[0])
// console.log(harshProject[1])

// console.log(harshProject[2])


let msg = "Hello";
msg = msg.concat(" World");
// msg=msg + ' world'
console.log(msg);

// 2 Convert Function
// Complete the function to convert minutes to seconds.
function toSeconds(minutes) {
  return sec = minutes * 60

}

console.log(toSeconds(5)); // Expected: 300


// Sum of Array
// Update the function to return the sum of all numbers in the array.
//sumArray([1, 2, 3, 4]); // Expected: 10

function sumArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {

    sum = sum + arr[i]
  }
  return (sum)

}

console.log(sumArray([1, 2, 3, 4])); // 10

// Remove Duplicate Values
// Remove duplicates from an array.
let nums = [2, 3, 4, 2, 4, 5, 6, 3];
dup = []

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!dup.includes(arr[i])) {
      dup.push(arr[i])
    }
  }

}


removeDuplicates(nums)
console.log(dup)



// Promise Handling
// Make the function work using Promise to print "Task Complete" after 2 seconds.
function waitTwoSeconds() {
  // return promise here
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve() }, 2000)
  })
}

waitTwoSeconds().then(() => console.log("Task Complete"));



// Fix the API so it returns {"message": "Hello"}.
// app.get("/hello", (req, res) => {
//   res.send({ message: "Hello" });
// });

// 9 Validate Email
// Complete this function to return true only if email is valid.
// regx=^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

function validateEmail(email) {

  const validate = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  if (validate.test(email)) {
    console.log("true")
  } else {
    console.log("false")
  }

}

validateEmail("test@gmail.com"); // Expected: true


//not using inbuilt methods

function validateByLogicEmail(email) {
  if (email.endsWith("@gmail.com")) {
    console.log("true")
  } else {
    console.log("false")
  }
}
validateByLogicEmail("test@gmail.com")


//find the bug in below function

function largest(arr) {
  let larger = 0;
  arr.map(num => {
    if (num > larger) {
      larger = num;
    }
  });
  console.log(larger);
}
largest([34, 76, 59, 32])

// 11 Count Vowels
// Return number of vowels in a string.
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let i of str) {
    if (vowels.includes(i)) {
      count++;
    }

  }
  console.log(count);
}
countVowels("javascript"); // Expected: 3

//fizz buzz
// 13 FizzBuzz
// Print 1–50.
// Multiples of 3 print “Fizz”
// Multiples of 5 print “Buzz”
// Both → “FizzBuzz”

for (i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz")
  } else if (i % 3 == 0) {
    console.log("Fizz")
  } else if (i % 5 == 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}

//Revers string

function reversString(str) {
  let revStr = ""
  for (i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i]
  }

  console.log(revStr)

}

reversString("abcdefg")

