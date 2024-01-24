'use client'

import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";

export default function Display() {

  const select = useSelector((data)=> data.user);
  const dispatch = useDispatch();

  const remove =(data)=>{ 
    dispatch(
      removeUser(data)
    )
    
  }

  return (
    <div>
             <h1>User List</h1>  
             {

            select=== null? "": select.map((item)=>{
                return(
                  <>
                    <li key={item.id}>{item.name} <span onClick={()=> remove(item.id)}>Delete</span></li>  
                  </>
                )
              })
             }    
    </div>
  )
}
