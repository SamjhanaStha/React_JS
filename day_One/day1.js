// var :functional scope variable
// let : block scope variable
// const : block scope variable
// functional scope example[those variable declared inside a function are called functional scope variable and cannot be accessed outside the function]

function test(){
    var a = 30
    console.log("a =",a)
    // block
    if (true == true){
        var b = 40;
        console.log("b =", b)
    }
    console.log("outside block:", b)
}
// function call
test()
    // console.log("outside function:", a)

// block variable example
for(let i = 0; i<10; i++){
    console.log(i)
    const count = 10
    console.log(count)
}
console.log("outside the for block: ", count)

// object (key:value pair)
let myObj = {
    fullName : "Ram Singh",
    age : 23,
    address : "Nepal",
    gender : "male",
}

// destructuring object
let {age, gender, fullName} = myObj
console.log(age, gender, fullName)
