// rest operator: this is used to called multiple arguments into an array
//  symbol: ...

// function without rest opertor
let add = (a,b, c, d, e, f, g, h, i, j, k) =>{
    let res = a + b + c + d+ e + f + g + h + i + j + k
    console.log("add result:", res)
}

// call function
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)

// function using rest
let addUsingRest = (...values) => {
    let sum = 0
    for(let i = 0; i< values.length; i++){
        sum += values[i]
    }
    console.log("sum : ", sum)
}

addUsingRest(1,2,3,5,7,8,9,4,3,11,4,57,34,23)