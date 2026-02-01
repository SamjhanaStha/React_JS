let Config = {
    appName: "Big Mart",
    currency: "NPR"
}

class Product{
    constructor(num, name, price){
        this.num = num;
        this.name = name;
        this.price = price;
    }
}

function fetchProduct(){
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            const fail = Math.random > 0.5
            if(fail){
                reject("Netwoek fail")
            } else {
                reslove([
                    {num:1, name: "latpto", price: 123000},
                    {num:2, name: "flour", price: 200},
                    {num:3, nmae: "NoteBook", price: 500},
                ])
            }
        },2000)
    })
}

function untility(product){
    console.log("Product List:")
    product.forEach= (product, index)=>{
        console.log(`${index}, ${product.fetchProduct()}`)
    }
}

export{Config, product, fetchProduct,untility}