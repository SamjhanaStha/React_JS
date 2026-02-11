import allFoodMenus from "../../datas/food_data"
import './foodlist.css'

let FoodList =()=>{
    return(
        <div>
            <h5 className="list">All Food List</h5>
            <div className="food-List">
                {
                    allFoodMenus.map(
                        (fm, index)=>{
                            return(
                                <div key={`${fm.id} - ${fm.name}`} 
                                onClick={()=>alert(fm.name)}
                                className="food-card"> 
                                <h4 className="food-id">{fm.id}</h4>
                                <p className="title">{fm.name.toUpperCase()}</p>
                                <p className="base-price">Base Price: {fm.base_Price}</p>
                                {
                                    fm.sub_Food_menu.map((sfm, index)=>{
                                        return(
                                            <div key={`${sfm.name}- ${sfm.price}`} onClick={()=>alert(sfm.name)} className="sub-foob-card">
                                                <p className="title">{sfm.name.toUpperCase()}</p>
                                                <p className="base-price">Base Price: {sfm.price}</p>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default FoodList 