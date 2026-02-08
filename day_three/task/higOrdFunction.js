// 1. Write a higher-order function repeat(action, times) that calls action function times times.

let repeat = (action, times)=>{
    for(let i=0; i<times; i++ ){
        action(i);
    }
}

let times = repeat (
    console.log,
    3
)

// Create a function operate(arr, fn) that applies fn to each element using map

let operate = (arr, fn)=>{
    return arr.map(fn)
}

let number = [2,5, 7,8]

const double = operate(
    number, (x)=> x*x
)


