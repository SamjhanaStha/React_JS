// Write a function sayHello with a parameter name that defaults to "Guest" if not provided. Log the output when called with and without an argument.

let sayHello = (name = "Guest") => {
    console.log(`Hello,! ${name}`)
}

sayHello("smajhana")
sayHello()