//  “this” losing context
// Create a button click example (even if simulated) where calling a method loses this, then fix it using .bind(this)
// Goal: experience the common UI bug

let button ={
    message : "Click the button",
    handleClick : function(){
        console.log(`Hello! ${this.message}`)
    }
}

// loses data
let error = myObj.uiBug
error()

// fix by using .bind(this)
let solve = myObj.uiBug.bind(myObj)
solve()