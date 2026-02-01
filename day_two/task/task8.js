// async/await fetching mock data
// Create a function fetchUsers() that returns a Promise with an array of users after 1 second.
// Use async/await to get and log users.
// Goal: basic async API task

function fetchUsers(dataId){
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            reslove([
                {id: 1, name: "samjhana"},
                {id: 2, name: "raju"},
                {id: 3, name: "samur"},
            ])
        }, 1000)
    })
}

(async function (){
    console.log("getting users data....")
    console.log(await fetchUsers(1));
})()