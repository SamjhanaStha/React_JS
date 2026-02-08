//1. Update an object's age from 25 to 26 immutably using spread operator.
const obj = {
    name: "Jhon",
    age : 25,
}

const updateObj = {
    ...obj,
    age: 26,
}

console.log(updateObj)

// 2. Add a new hobby to a person's hobbies array immutably.
const person = {
    name: "Jhon",
    hobby: ["Football", "Reading"],
}

const UpdateHobby = {
    ...person,
    hobby: [...person.hobby, "Cycling"]
}
console.log(UpdateHobby)

// 3.Remove the last element from an array immutably.
const hobbies = ['Reading', 'Cycling', 'Gardening'];
const updatedHobbies = hobbies.slice(0, -1);
console.log(updatedHobbies)

// 4.Replace the second element in an array immutably.
const hobbies1 = ['Reading', 'Cycling', 'Gardening'];
const updatedHobbies2 = [...hobbies1.slice(0, 1), "swimming", ...hobbies.slice(-1)];

console.log(updatedHobbies2)

// 5. Change a nested property address.city in an object immutably.
const person1 = {
    id: 1,
    name: "samjhana",
    address: {
        city: "Bhaktapur",
        State: "Bagmati",
        Country: "Nepal"
    },
}

let person2 = {
    ...person1,
    address: {
        ...person1.address,
        city: "Ktm",
    }
}

console.log(person2)

// 6. Add a new key-value pair to an object immutably.
const person3 = {
   ...person1,
   email: "abc@gmail.com",
}

console.log(person3)

// 7. Remove a property deletedAt from an object immutably.
const {name, ...deleteObject} = person1

console.log(deleteObject)

// 8. Merge two arrays immutably into a new array.
const arr1 = [23, 45, 67,86,12]
const arr2 = [12, 54, 65]
let arr3= [...arr1, ...arr2]
console.log(arr3)

// 9. Merge two objects immutably into a new object.
const obj1 = {
    name: "samjhana",
    id: 23,
}

const obj2 = {
    city: "Bhaktapur",
    Countrt: "Nepal"
}

const mergeObj = {
    ...obj1, 
    ...obj2
}

console.log(mergeObj)

// 10. Update a specific object in an array of objects immutably (by id).
const users = [
  { id: 1, name: 'Alice', role: 'User' },
  { id: 2, name: 'Bob', role: 'User' },
  { id: 3, name: 'Charlie', role: 'User' }
];
const targetId= 2
const newValues = { role: "admin"}

const updateUsers = users.map(user =>
    user.id === targetId ? {...user, ...newValues} : user
)

console.log(updateUsers)