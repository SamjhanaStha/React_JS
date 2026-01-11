// array: collection of element
// notation: []
// syntax: let arrayName = [element1, element2, element3]

// createing array 
let myArray = [40, 30, 20, 10, 90, 50, 80]

// calculating array length
console.log("myArray length :", myArray.length)

// accessing element in some index
console.log("Element at index 5:", myArray[5])

// adding new element at last of the array
myArray.push(100)
console.log("new myArray:", myArray)

// removing last element of the array
myArray.pop()
console.log("new myArray:", myArray)

// updating element of some index
myArray[4] = 67
console.log("update array", myArray)

// todo: slice, splice, concat, jion
// for loop in array
for(let i=0; i<myArray.length;  i++){
    console.log("element in index:", i, "is:", myArray[i])
}

// using for-of loop in array : extract element from array
for(let element of myArray){
    console.log("element:", element)
}

// using for-in loop
for(let i in myArray){
    console.log("index:",i,"element:",myArray[i])
}

// using  forEach extension method of array
myArray.forEach(
    // callback function
    (element, index)=>{
        console.log("forEach: index:",index,"element:",element)
    }
)

// using map extension method
let modifiedArray = myArray.map(
    (element, index) => {
        return element+5
    }
)
console.log("modified array:", modifiedArray)

// using reduce extension method: reduce all elements to one value
let marks =[34,56,74,88,99,33,48,66]
let sum = marks.reduce(
    (accumulator, element)=>{
        return accumulator + element
    }
)
// initial value for accumulator
console.log("sum:", sum)

let max = marks.reduce(
    (acc, ele)=>{
        return acc> ele ? acc : ele
    },
    marks[0]
)
console.log("max:", max)

//  find: to find the element in array with condition
// find always return the first element found
let searchedValue = marks.find(
    (ele, i)=>{
        return ele>70
    }
)
console.log("searched value:", searchedValue)

// using filter
let filteredValue = marks.filter(
    (ele, i)=>{
        return ele >70
    }
)
console.log("filtered value:",filteredValue)

// todo: reverse, shift, sort,unshift, includes