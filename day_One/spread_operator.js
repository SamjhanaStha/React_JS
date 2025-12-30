// Spread operator: this is used to expand array or object into individual elements
// symbol: ...
let numbers = [3,4,7,23,12]
console.log("numbers:", numbers) //output: [3, 4, 7, 23, 12]
console.log("Spreaded numbers:", ...numbers) //output: 3 4 7 23 12

// merging two arrays
let arr1 = [55, 78, 34, 23]
let arr2 = [45, 76, 54, 12]
let mergedArray= [...arr1, ...arr2, 104]
console.log("merged array:", mergedArray)  //output:merged array: [55, 78, 34,  23, 45, 76, 54, 12, 104]

// spread in Object
let obj1 = {
    fullName: "Ram Singh",
    age: 23,
    address: "Nepal",
}

let obj2 = {
    contact : 9847362475,
    postalCode: 12345,
    ...obj1
}

console.log("obj1:", obj1)
console.log("obj2:", obj2)