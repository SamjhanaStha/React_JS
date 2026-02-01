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