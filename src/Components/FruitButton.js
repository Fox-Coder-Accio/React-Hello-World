import React from "react"


// props = {fruit:"Apple", color:"red"}
// {fruits, color} = props

const FruitButton = ({fruit, color}) => {
    // console.log(props) // {fruit:"Apple", color:"red"}
    // props.fruit = "Mango" // read only object
   return(
       <div>
           <button> {fruit} </button>
           <p>{fruit} is {color} in color </p>
       </div>
   )
}

export default FruitButton


// ${}


// let obj = {
//     a:10
// }

// obj.a = 100