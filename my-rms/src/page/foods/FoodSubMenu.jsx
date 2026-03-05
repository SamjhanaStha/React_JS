import './FoodSubMenu.css'
import { foodSubMenuList } from '../../datas/food_sub_menu'
import { useState } from 'react'

const FoodSubMenu = () =>{
    const [allFoodSubMenu, setAllFoodSubMenu] = useState(foodSubMenuList)
    const [name, setName]= useState("")
    const [icon, setIcon] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)

    const handleAddFoodsubMenu = (e) =>{
        // prevent page refresh on form submit
        e.preventDefault()
        // create new data object
        let newData = {id: allFoodSubMenu.length+1, name: name, icon: icon, description: description, price: price};
        // add new data to the list
        setAllFoodSubMenu([...allFoodSubMenu, newData])
        // reset form
        setName("")
        setIcon("")
        setDescription("")
        setPrice(0)
    }

    const [isEditMode, setIsEditMode] = useState(false)
    const[editId, setEditId] = useState(null)
    const handleOnClickEditBtn = (data)=>{
        setName(data.name)
        setIcon(data.icon)
        setDescription(data.description)
        setPrice(data.price)
        setIsEditMode(true)
        setEditId(data.id)
    }

    const handleOnClickDeleteBtn= (e)=>{
        let newData = allFoodSubMenu.filter(datas => datas.id !== e)
        console.log(newData)
        setAllFoodSubMenu(newData)
    }

    const handleEditFoodSubMenu = (e)=>{
        e.preventDefault()
        let foundFsm = allFoodSubMenu.find(
            (ele)=>{
                return ele.id === editId
            }
        )
        if(foundFsm){
            foundFsm.name = name
            foundFsm.icon = icon
            foundFsm.description = description
            foundFsm.price = price
            setAllFoodSubMenu([...allFoodSubMenu])
            // reset form
            setName("")
            setIcon("")
            setDescription("")
            setPrice(0)
            setIsEditMode(false)
            setEditId(null)
        }
    }

    return(
        <div>
            <h1>Food sub Menu</h1>
            <div className='fsm-main'>
                <div className='fsm-container'>
                    {
                        allFoodSubMenu.map(
                            (fsm, index)=>{
                                return(
                                    <div key={`${fsm.id}-${fsm.name}`} className='fsm-card'>
                                        <h4>{fsm.id}</h4>
                                        <h5>{fsm.icon}</h5>
                                        <b>{fsm.name}</b>
                                        <p>{fsm.description}</p>
                                        <p>{fsm.price}</p><br />
                                        <button className='button' onClick={()=>handleOnClickEditBtn(fsm)}>edit</button>
                                        <button className={`button`} onClick={()=>handleOnClickDeleteBtn(fsm.id)}>delete</button>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
                {/* Form to add food sub menu */}
                <form className="fsm-form" onSubmit={isEditMode ? handleEditFoodSubMenu : handleAddFoodsubMenu}>
                    <label>
                        Name: <br />
                        <input type="text" name='name' placeholder='Enter sub Menu Name' onChange={
                            (e)=>setName(e.target.value)
                        } value={name}/>
                    </label><br />
                    <label>
                        Icon: <br />
                        <input type="text" name='icon' placeholder='Enter sub Menu Icon' onChange={
                            (e)=>setIcon(e.target.value)
                        } value={icon} />
                    </label><br />
                    <label>
                        Description: <br />
                        <input type="text" name='description' placeholder='Enter sub Menu Description' onChange={
                            (e)=>setDescription(e.target.value)
                        } value={description}/>
                    </label><br />
                    <label>
                        Price: <br />
                        <input type="number" name='price' placeholder='Enter sub Menu Price' onChange={
                            (e)=>setPrice(e.target.value)
                        } value={price} />
                    </label><br /><br />
                    <button type='submit' className={`button ${isEditMode && "button-edit"}`}>
                        {isEditMode ? "Edit Sub Menu" : "Add Sub Menu"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FoodSubMenu