// Write a pure function multiply(a, b) that returns the product of two numbers.

function mul(a, b){
    return a*b
}

console.log(mul(8, 9))

// Create a pure function getFullName(firstName, lastName) that returns a concatenated full name with a space.

function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`
}

console.log(getFullName("samjhana", "shrestha"))

// Write a pure function isEven(num) that returns true if the number is even, false otherwise.

function isEven(num){
    return num%2==0? "Even" : "Odd"
}

console.log(isEven(3))

// Create a pure function capitalize(str) that returns the string with the first letter capitalized.
function capitalize(str){
    return str.charAt(0).toUpperCase()+ str.slice(1)
}

console.log(capitalize("samjhana"))

// Write a pure function calculateArea(radius) that returns the area of a circle (use π ≈ 3.14).
function calculateArea(radius){
    return Math.floor(2*3.14*radius*radius)
}

console.log("Area of circle:", calculateArea(3))

// Create a pure function getInitials(firstName, lastName) that returns initials like "D.S." for "Dipak Shrestha".
function getInitials(firstName, lastName){
    const firstInitial = firstName.charAt(0).toUpperCase()
    const lastInitial =  lastName.charAt(0).toUpperCase()
    let merge = `${firstInitial}.${lastInitial}.`
    return merge
}

console.log(getInitials("Samjhana", "Shrestha"))

// Write a pure function fahrenheitToCelsius(f) that converts Fahrenheit to Celsius.
function fahrenheitToCelsius(f){
    return (f-32)*(5/9)
}

console.log(fahrenheitToCelsius(112))

// Create a pure function reverseString(str) that returns the reversed string.
function reverseString(str){
    return str.split("").reverse().join("")
}

console.log(reverseString("hello"))

// Write a pure function findMax(arr) that returns the largest number in an array.

function findMax(arr){
    return Math.max(...arr)
}

console.log(findMax([23,54,13,75,25,74]))

// Create a pure function formatDate(year, month, day) that returns a string in "DD/MM/YYYY" format. 
function formatDate(year, month, day){
    const DD = String(day).padStart(2, '0')
    const MM = String(month).padStart(2, '0')
    const YYYY = year
    return `${DD}/${MM}/${YYYY}`
}

console.log(formatDate(2082, 10, 20))