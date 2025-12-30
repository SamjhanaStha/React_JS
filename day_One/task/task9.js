// Create two arrays [1, 2, 3] and [4, 5]. Merge them into a new array using the spread operator and log the result.

let arr1 = [1, 2, 3]
let arr2 =[4, 5]

let mergedArray = [...arr1, ...arr2]
console.log(mergedArray)