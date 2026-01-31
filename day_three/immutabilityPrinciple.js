// immutability principle: the ability of an object to not be changed
// this principle indicates that an object can't be modified once it is created

// mutable objects example
let obj = {
    fruitName: "Apple",
    color: "RED",
}

console.log("original objects:", obj)
obj.price = 100
console.log("updated objects", obj)

// immutable object example
let myObj = {
    vegitableName: "Potato",
    color: "Grey",
}

let updatedObj = {...myObj, price : 200}
console.log("oiginal object", myObj)
console.log("updated object", updatedObj)