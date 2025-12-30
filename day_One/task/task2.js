// Create a let variable inside a block {} and try to access it outside. Then do the same with a const variable. Observe the errors.
let block = () => {
    let x = 15
    console.log(x)
}

block()
console.log(x)