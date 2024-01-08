'use client'

export default function Product({price}){
    return(
        <>
                   <button onClick={()=> alert(price)}>Click Me</button>      
        </>
    )
}