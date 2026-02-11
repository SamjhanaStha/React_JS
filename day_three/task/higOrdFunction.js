// 1. Write a higher-order function repeat(action, times) that calls action function times times.

let repeat = (action, times)=>{
    for(let i=0; i<times; i++ ){
        action(i);
    }
}

let times = repeat (
    console.log,
    4
)

//2. Create a function operate(arr, fn) that applies fn to each element using map

let operate = (arr, fn)=>{
    return arr.map(fn)
}

let number = [2,5, 7,8]

const double = operate(
    number, (x)=> x*x
)

// 3. Write a function filterBy(arr, conditionFn) that returns filtered array using the provided condition.
let filterBy= (arr, conditionFn) => {
    const result= [] 
    for(let i = 0; i<arr.length; i++){
        if(conditionFn(arr[i], i, arr)){
            result.push(arr[i]) 
        }
    }
    return arr;
}

let num = [23, 12, 64, 27, 24]
const even= filterBy(num, (num)=>num%2===0)
console.log(even)
