// Higher order function: those function which takes one or more function as an arguments or those function that return a function
// callback function: function that is passed as an argumented to other function
// let res = (a*b)/c

let multiply = (a,b) =>{
    return a*b
}

// higher order function
let calculate = (a,b,c, multiplyFunc, devideFunc) =>{
    let multiplyResult = multiplyFunc(a,b)
    let divideResult = devideFunc(multiplyResult, c)
    return divideResult
}

// Calling higher order function
let finalResult = calculate(
    45,
    70,
    30,
    multiply,
    (m,c)=>{
        return m/c
    }
) 

console.log("final reslut:", finalResult)