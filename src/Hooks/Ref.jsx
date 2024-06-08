import React, {createRef} from "react";

class Ref extends React.Component{
 constructor()
 {
    super();
    this.inputRef=createRef();
 }
componentDidMount()
{
   // console.warn(this.inputRef.current.value="1000")
}
getVal()
{
    console.warn(this.inputRef.current.value) 
    this.inputRef.current.style.color="red"
    this.inputRef.current.style.background = "pink"  
}
 render()
 {
    return(
        <>
        <h1>Ref Example</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={()=>this.getVal()}>Check ref</button>
        </>
    )
}
}
export default Ref;