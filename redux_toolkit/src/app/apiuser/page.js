'use client'

import { useDispatch, useSelector } from "react-redux"
import { fetchDataUser } from "../redux/slice";
import { useEffect } from "react";


export default function page() {
    const dispatch = useDispatch();
    const apiUserData = useSelector(data => data);
    const data = apiUserData.userApiData;
    

    useEffect(()=>{
        dispatch(fetchDataUser())
    },[])
  return (
    <div>
              <h1>Api data from redux</h1> 
              {
                data.map((item)=>{
                    return(
                        <>
                        <h2>{item.name}</h2>
                        </>
                    )
                })
              }
    
    </div>
  )
}
