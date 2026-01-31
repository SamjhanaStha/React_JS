import { Third } from "./home"

let App = () =>{
  let marks = 59
  return(
    // return always return only one jsx element (html like element)
    // always use () after return
    // and use fragment(<>,</>) or div to return multiple jsx elements
    <div>
      <h1>Hello world</h1>
      <p>This is paragraoh</p>
      {/* Never use capital letters for jsx element */}
      {/* <B>This is a bold text</B> */}
      {/* Use className instead of class attributes since class is keyword in js */}
      {/* use htmlFor instead of for attributes */}
      <b className="bold">This is a bold text</b><br />
      {/* always us {} for js expressions of variables */}
      <i>Total: {79+56}</i>
      <h4>Check: {34%2 ==0? "Even" : " Odd"}</h4>
      <h3>Marks: {marks}</h3>
      <Third/>
    </div>
    
  ) 
}

export default App