// Promise for fetching settings
// Create a function that returns a Promise that resolves after 2 seconds with app settings (theme, language).
// Use .then() to print them.
// Goal: simulate async settings

function fetch(dataId){
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            console.log("data:", dataId)
            reslove({
                theme: "dark",
                language: "np"
            })
        }, 2000)
    })
}
console.log("setting data1....")
fetch(1).then((res)=>{
    console.log("setting data2....")
    fetch(2).then((res)=>{
        console.log("setting data3...")
        fetch(3).then((res)=>{
            console.log("Theme: ", res.theme)
            console.log("language: ", res.language)
        })
    })
})