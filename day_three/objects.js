// object : key:value pair
// notation: {}
// can add as many as key:value pair inside {}
// creating object {key:value}
let myObj = {
    fullName : "Aakash",
    age: 20,
    "gender": "Male",
    isMarried: false,
}
// accessing key's value from object
// 1. Bracket Notation
let fullName = myObj["fullName"]
console.log("fullName:", fullName)
// 2. dot notation
let age = myObj.age
console.log("Age: ", age)

// adding new key value pair
myObj.country = "Nepal"
console.log("Updated objects:", myObj)

let myNewObj = {
    adress: "Kathmandu",
    ...myObj,
}
console.log("myNewObj:",myNewObj)

// updating value of existing key
myObj.isMarried = true
console.log("Updated objects:", myObj)

// deleting key:value
delete myObj.isMarried
console.log("Updated objects:", myObj)

// nested object
let myNestesdObj = {
    name : "Hari",
    adreess: {
        country: " Nepal",
        city: "Bhaktapur",
        state: "Bagmati",
        postalCodes: [3400,4589, 3456, 2345],
    },
    otherNames: [
        {
            firstName: "Hari",
            lastName: "Shrestha",
        },
        {
            firstName: "Pintu",
            lastName: "Shrestha",
        },
        {
            firstName: "Dally",
            lastName: "Shrestha",
        },
    ],
}

console.log(myNestesdObj.adreess.postalCodes)
for(let n of myNestesdObj.adreess.postalCodes){
    console.log(n)
}

myNestesdObj.adreess.postalCodes.forEach(
    (ele, index)=>{
        console.log("element:", ele, "index:", index)
    }
)

myNestesdObj.otherNames.forEach(
    (ele, index)=>{
        console.log("name:", ele.firstName,ele.lastName,"index", index)
    }
)

// let {a,b} = {a:10, b:5}
myNestesdObj.otherNames.forEach(
    // using destructure object
    ({firstName, lastName}, index)=>{
        console.log("name in index:", index, "is:", firstName, "last:", lastName)
    }
)

// converting object {key:value pair} to object{array}
let student = {
    fullName: "Sandip Lamichhane",
    age: 20,
    marks: 87,
}

// 1. Converting to keys array
let keysArray = Object.keys(student)
console.log("keys array:", keysArray)
// 2. Converting to value array
let values = Object.values(student)
console.log("values:", values)
// 3. converting to entries
// outputs: [[k1, v1], [k2, v2], [k3, v3]]
let entries = Object.entries(student)
console.log("entries:", entries)

keysArray.forEach(
    (ele,index)=>{
        console.log("element in index:", index, "is:", ele)
    }
)

values.forEach(
    (ele,index)=>{
        console.log("element in index:", index, "is:", ele)
    }
)

entries.forEach(
    ([k,v],index)=>{
        console.log("element in index:", index, "is:", k, "values:", v)
    }
)

entries.forEach(
    (ele,index)=>{
        console.log("element in index:", index, "is:", ele[0], "values:", ele[1])
    }
)