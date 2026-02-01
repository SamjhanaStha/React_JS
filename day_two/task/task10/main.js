// Combine everything
// Build a tiny app flow:
// Import config
// Create Product class
// Fetch mock product list using async/await
// Handle errors using try/catch
// Log formatted result using a utility function
// Goal: mini end-to-end realistic module

import { Config, fetchProduct, product, untility } from "./config"

(async function (){
    console.log("App starting with config:", Config)
    console.log("Fecting products....\n")
    try{
        const products = await fetchProduct()
        const pro = product.map(
            item => new product(item.num, item.name, item.price)
        )

        untility(products)

        console.log("\n product loaded successfully!")
        return products
    } catch(err){
        console.log('\n Error: ')
        console.log("Friendly message: Unable to load product at this time")
        console.log("please check your connection and try again")
         return []
    }
})()