// Module: Utility functions
// Make a utils.js with:
// formatCurrency()
// generateRandomId()
// getTodayDate()
// Import and use them in another file.

let farmatCurrency=(amonut) =>{
    return amonut*1.6
}

let generateRandomId= () => {
    return Math.random()
}

let getTodayDate=()=>{
    return new Date().toISOString().split("T")[0];
}

export {farmatCurrency, generateRandomId, getTodayDate}