// Merge and Destructure Objects

let obj1 = {
    name : "Samjhana Shrestha",
    age : 20,
}
let obj2 = {
    country  : "Nepal",
    address : "Jasukhel",
}
let merge = {...obj1, ...obj2}
console.log(merge)

let {name, address} = merge
console.log(name)
console.log(address)

