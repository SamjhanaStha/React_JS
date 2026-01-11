// this indicates the nearest object
let myObj = {
    fullName: "Hari Khatri",
    address: "BKT",
    age: 40,
    gender: "Male",
    displayFullName: function(){
        console.log("display full name function called")
        console.log("fullname :", this.fullName)
    },
}

// calling dispalyFullName function
myObj.displayFullName()

// if displayFullName function is assigned to new variable then this is lost
let tempFunc = myObj.displayFullName
tempFunc()
// solution to preserve the this keyword
let tempFunc2 = myObj.displayFullName.bind(myObj)
tempFunc2()