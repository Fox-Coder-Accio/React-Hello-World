import React from "react"; // >17.2
import FruitButton from "./Components/FruitButton";



const App = ()=>{

    let a = 100

    let h1Style = {textAlign:"center"}

    return (
        <div className="hello">
            <h1 style={h1Style}>Hello World</h1>
            <p>Hey my first React App</p>
            <p> Value is {2+3}</p>





           <FruitButton 
              fruit = "Apple"
              color = "red"
           />
          

           
        </div>
    )
}


export default App




// modules





