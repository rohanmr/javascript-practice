//Create Update delete object 
student={
name:"rohan",
age:21,
collage:"TPCTs"
}

student.subject="Math"

student.age=23

console.log(student)

delete student.age

console.log(student)

//Nested Object
book={
    titel:"Red eye",
    auther:"rm",
    details:{
        pages:50,
        genre:'Horror'
    }
}

console.log(book)
console.log(book.details)

//Lopp through object

product={
    name:"Mobile",
    price:5000,
    stock:10

}

for(x in product){
    console.log(x,product[x])
}

//Add Method to and Object
