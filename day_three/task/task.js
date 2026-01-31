// json data
let jsonData = "Hello all"
try{
    let parsedData = JSON.parse(jsonData)
    console.log("parsed data:", parsedData)
} catch (err) {
    console.log("invalid json data")
}

let realjsonData = '{"age": 20, "name":"samjhana"}'
try{
    let parsedData = JSON.parse(realjsonData)
    console.log("parsed data:", parsedData)
} catch (err) {
    console.log("invalid json data")
}