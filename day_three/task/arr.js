//1. Create an array colors with 5 color names and log the third element.

const color = ["Red", "Black", "White", "Blue", "Yello"]
console.log(color[2])

//2. Create an object book with properties title, author, pages, and publishedYear.
const book = {
    title: "Dare you to death",
    author: "someOne",
    pages: 230,
    publishedYear: 2025,
}

console.log(book)
console.log("Book Name:", book.title)

//3. Add a new property isRead: true to an existing book object immutably (return new object).

const read = (bookObj)=>{
    return {
        ...bookObj,
        isRead : true
    }
}

console.log(read(book).isRead)

//4. Create an array of 3 objects, each representing a student with name and grade.

const student= [
    {name: "samjhana",
        grade: 2.7,
    },
    {name: "raju",
        grade: 3.7,
    },
    {name: "saru",
        grade: 4,
    }
]

console.log(student)

//5. Create a nested object company with properties name, location, and employees (an array of names).
const company = {
    name: "Tech solution",
    location: {
        city: "Bhaktapur",
        state: "Bagmati",
        country: "Nepal",
    },
    employess : ["samjhana", "Alice", "Bob"]
}

console.log(company)

//6. From an array numbers = [10, 20, 30], create a new array with each value increased by 5 immutably.

let arr = [10, 20, 30]
const increasedByFive = arr.map(num => num + 5)

console.log(increasedByFive)
console.log(arr)

// 7. Create an object car and add a new property color immutably.

let car = {
    brand: "BMW",
    model: "Model1",
    price: 123500,
}

let addNewPro= {
    ...car,
    color: "red",
}

console.log(addNewPro)

// 8.Create an array shoppingList and add a new item at the beginning immutably.

const shoppingList= ["bag", "furit", "Home Items"]
const addNewItem = ["laptop", ...shoppingList]
console.log(addNewItem)

// 9.Create an object profile with nested address object containing city and country.
let profile = {
    userName: "abxc@gmail.com",
    address: {
        city: "Bhaktapur",
        state: "Bagmati",
        country: "Nepal",
    },
}
console.log(profile)

// 10.From an array of objects products, create a new array with only name and price properties.
let products = [
    {num : 1, name :"aajk", price: 1244},
    {num: 2, name :"aajk", price: 1244 },
    {num: 3, name :"aajk", price: 1244 }
]

console.log(products)