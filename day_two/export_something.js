// exporting variables(normal export)
export const PI = 3.1415

// default export : only one default export in a file
let radius = 30.4
export default radius

let a = "Hello"
let b = "all"

// 
let calculateAreaOfCircle = (r) =>{
    return PI*r*r
} 

// exporting multiple variable
export {a,b, calculateAreaOfCircle}