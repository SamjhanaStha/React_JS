let ConditionalRender = ()=>{
    let age = 10
    return(
        <div>
            <h1>Conditional Rendering Example</h1> 
            {/* conditional rendering using ternary operator */}
            {age > 70 ? <h6>Senior citizen</h6>: <h6>Noramal Citizen</h6>}
            {/* cr using logical AND (&&): short circuit Evaluation ::  Always handle the true condition */}
            {age < 10 && <h6>Child</h6>}
            {/* cr using Logical Or (||): default value or failback value :: always handle the false condition */}
            {age < 10 || <h6>Not a Child (only rander if age is not less than 10)</h6>}
        </div>
    )
}

export default ConditionalRender