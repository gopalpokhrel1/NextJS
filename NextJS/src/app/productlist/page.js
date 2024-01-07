'use client'

import { useEffect, useState } from "react"

export default function Productlist(){

    const [data, setData]= useState([]);

    const file = async()=>{
        try{
            let  product = await fetch("https://dummyjson.com/products")
             product = await product.json();
             setData(product.products)
            
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        file()
    },{});


    return (
        <>
            {
                data.map((item) => {
                    return(<>
                    Name:{item.title} , price:{item.price} <br />
                    </>);
                })
            }
        </>
    );
}
