//  try/catch handling API errors
// Modify the previous task so the promise randomly rejects.
// Add try/catch to show a friendly message.
// Goal: handle API failures safely

function fetchUsers(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const fail = Math.random() <0.5
            if(fail){
                reject("API requested failed ")
            } else {
                resolve( [
                    {id : 1, name: "samjhana"},
                    {id: 2, name: "raju"},
                    {id: 3, name: "samur"},
                ])
            }
        }, 1000)
    })
}

(async function (){
    try{
        console.log("Successfully users are access:",await fetchUsers())
    } catch(err){
        console.log(err)
    }
})() 