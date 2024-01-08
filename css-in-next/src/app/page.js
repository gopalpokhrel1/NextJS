'use client'

import { useState } from "react"


export default function Home() {

  const [style, setStyle] = useState({backgroundColor:'green', color:'white'});
  return (
    <>
    {/*    inline css  */}
          <h1 style={{backgroundColor:"red"}}>Css Color in Next</h1> 

          <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio iusto. Magni repellendus beatae facere temporibus! Aliquam debitis sapiente necessitatibus.</p>

          <button onClick={()=> setStyle({backgroundColor:"yellow", color:'black'})}>Change Paragraph Color</button>   
    </>
    
  )
}
