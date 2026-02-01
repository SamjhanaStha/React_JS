//1. Use map to double all numbers in [1, 2, 3, 4, 5].
let num = [1, 2, 3, 4, 5]
let double = num.map(num => num*2)
console.log(double)

//2.  Use filter to get all even numbers from [1, 2, 3, 4, 5, 6].

const nums = [1, 2, 3, 4, 5, 6]
const even = nums.filter(nums => nums %2 ===0)
console.log(even)

// 3. Use reduce to calculate the sum of [10, 20, 30, 40].
const values = [10, 20, 30, 40]
const sum = values.reduce((total,current)=>total + current, values[0])
console.log(sum)

// 4. Use find to get the first object with age > 18 from an array of user objects.
let users = [
  { name: "Alice", age: 14 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 17 }
]

const user = users.find (a =>a.age >18)
console.log(user)

// 5. Use forEach to log each element of ["apple", "banana", "orange"] with its index.

const fruits = ["apple", "banana", "orange"]
fruits.forEach((ele, indes)=>{
    console.log(`Index: ${indes}, Fruit: ${ele}`)
})

// 6.Use map to extract only names from an array of user objects.
let array1 = [
    {name:"samjhana", id: 23},
    {name: "sarmila", id :21},
    {name: "sansila", id: 19}
]
let name = array1.map(({name})=> name)
console.log(name)

// 7.Use filter to get products with price < 100 from an array of product objects.
let products = [
    { name: "Keyboard", price: 120 },
    { name: "Mouse", price: 45 },
    { name: "USB Cable", price: 15 },
    { name: "Monitor", price: 300 }
]

const productPrice = products.filter(products=>products.price<100)
console.log(productPrice)

// 8.Use reduce to find the maximum value in an array of numbers.
let numb1= [23, 56, 33, 52, 90]
let maxValue = numb1.reduce((accu, currentValue)=> currentValue> accu ? currentValue : accu, numb1[0])
console.log(maxValue)

// 9.Use map and filter together to get names of adults (age >= 18) in uppercase.
const people = [
    { name: "Alice", age: 25 },
    { name: "bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "daisy", age: 12 }
]

const adults = people.filter(pe => pe.age >= 18).map(pe=>pe.name.toUpperCase())
console.log(adults)

// 10.Use forEach to build an HTML unordered list string from an array of items.
const fruit = ["Apple", "Banana", "Cherry"];
let htmlList = "<ul>\n"
fruit.forEach((fruit) => {
  htmlList += `  <li>${fruit}</li>\n`
})
htmlList+= "</ul>"

console.log(htmlList)