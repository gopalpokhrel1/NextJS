'use client'

import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";


export default function Add() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const dispatchdata = ()=>{
        

        dispatch(
            addUser(name)
            
        )

    }
  return (
    <div style={{display:'flex', flexDirection:'column'}}>

    <h1>Add Users</h1>
    <input type="text" placeholder="Enter the name user" style={{width:'10rem', height:'3rem'}} onChange={(e)=> setName(e.target.value)}/>
    <button style={{width:'5rem', height:"2rem"}} onClick={dispatchdata}>Add users</button>

      
    </div>
  )
}
