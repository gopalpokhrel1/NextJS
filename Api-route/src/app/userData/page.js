'use client'

import { useState } from "react"

export default function page() {

    const [fullname, setFullname] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');


    const handleform= async ()=>{
        let response = await fetch('http://localhost:3000/api/user', {method:'Post', body:JSON.stringify({fullname, email,password})})
         

        response= await response.json();
        console.log(response)

        if(response.status == true){
            alert("Successfull");
        }

       
       
    }
  return (
    <>

      <h1>Handle form</h1>
      <div className="box">
            <input type="text" value={fullname} onChange={(e)=> setFullname(e.target.value)} placeholder="full name"/>  <br />
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="email" /> <br />
            <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password"/> <br />
            <button onClick={handleform}>Submit</button>

      </div>
      
    </>
  )
}
