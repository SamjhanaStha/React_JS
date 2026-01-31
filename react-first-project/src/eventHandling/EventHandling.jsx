let EventHandling = () => {
    let handleDecrement = (e) =>{
        console.log("Decrement Handling");
        console.log(e.target.title);
            e.target.style.backgroundColor = "red"
            e.target.style.color = "Blue"
        
    }

    let handleSignup = (e) =>{
        console.log("sign-up button click")
    }

    let handleNameChange = (e) =>{
        // console.log("input click ")
        console.log(e.target.value)
        e.target.style.backgroundColor = "black"
        e.target.style.color = "white"
    }

    return(
        <div>
            <h1>Event Handling</h1>
            <button onClick={
                (event)=>{
                    console.log("Hnadling Increment");
                    console.log(event);
                }
            }>Increment</button>
            <button title="Decrement Title" onClick={handleDecrement}>Decrement</button>
            <div title="sign-up" onClick={handleSignup}>Sign-up</div>
            Name: <input type="text" placeholder="Enter the name" onClick={handleNameChange} onChange={handleNameChange}/>
        </div>
    )
}

export default EventHandling