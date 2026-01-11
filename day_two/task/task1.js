// Task 1 — “this” inside an object method

// Create a user object that has name and login() method.
// Inside login(), print the username using this.name.

// Goal: understand object method context

let user = {
    name : "Samjhana",
    login(){
        console.log(`Hello, ${this.name}. You are now logged in!`)
    }
}

user.login()