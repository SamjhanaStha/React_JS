// Create two objects: {a: 1, b: 2} and {c: 3, d: 4}. Merge them using the spread operator. Then destructure the merged object to extract a and d and log them.

let obj1 = {
    a : 1,
    b : 2,
}

let obj2 = {
    c : 3, 
    d : 4,
}

let merged = {...obj1, ...obj2}
let {a, d} = merged
console.log(a)
console.log(d)