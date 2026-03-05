import { useState } from 'react'
import './dynamic_food_menu.css'

const DynamicFoodMenus = ()=>{
    const [foodMenus, setFooodMenu]= useState([
        {
            id: 1 ,
            name: "pizza",
            description: "price in discount",
            price: 250,
            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ])
    const handleAddMenu = ()=>{
        let random = Math.floor(Math.random() *100);
        let newData = {
            id: foodMenus.length +1,
            name: "Pizza" + random,
            description: "Lorem ipsum",
            price: 200,
            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        setFooodMenu ([...foodMenus, newData])
    }

    return(
        <>
        <h1>Dynamic Food menus</h1>
        <div className="container">
            {/* Food list section */}
            <div className="d-food-menus">
                {
                    foodMenus.map(
                        (fm,index)=>{
                            return(
                                <div key={`${fm.id}-${fm.name}`}>
                                    <img height={200}  src={fm.image} alt={fm.name}/>
                                    <h1>{fm.name}</h1>
                                    <h4>Id: {fm.id}</h4>
                                    <p>Description: {fm.description}</p>
                                    <b>Price: {fm.price}</b>
                                </div>
                            )
                        }
                    )
                }
            </div>
            {/* Food menu form section */}
            <div className="d-food-form">
                <button onClick={handleAddMenu}>Add Food</button>
            </div>
        </div>
        </>
    )
}

export default DynamicFoodMenus