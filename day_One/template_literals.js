// Template Literals or string interpolaion Example
// It defines a string with embedded expressions
// syntax: ${}
let name = "Jhon"
// traditional way
let myString = "my name is " + name
console.log(myString)
// using template literals
let myString2 =`my name is ${name}`
console.log(myString2)
let myAge = 50
let tempString = `My name is ${name.toUpperCase()} and my age is ${myAge}`
console.log(tempString)