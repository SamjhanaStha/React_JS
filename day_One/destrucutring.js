// destructuring: extracting data from array or object

// destructuring array:
let arr = ["Home", "work", "school", "office"]
let [a,b,c,d,e] = arr
console.log(a,b,c,d,e)

// object (key:value pair)
let myObj ={
    fullName : "roma singh",
    age :23,
    address : "nepal",
    gender : "female",

}
console.log(myObj)

// destructuring object 
let{age,gender,fullName} = myObj
console.log(age,gender,fullName)