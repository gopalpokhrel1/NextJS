'use client'

import { useState } from "react"

export default function Page() {

  const [name, setName]= useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [faculty, setFaculty] = useState('');

  const addProduct = async() =>{
    console.log(name, age, gender, faculty);

    let data = await fetch('http://localhost:3000/api/projects', {
      method:"POST",
      body: JSON.stringify({name,age,gender,faculty})
    })

    data = await data.json();
  
  }

  return (
    <>
    
     <h1>Home page</h1>
     <div className="input">
           <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name"   /> <br />     
           <input type="text" value={age} onChange={(e)=> setAge(e.target.value)} placeholder="Age"   />   <br />   
           <input type="text" value={gender} onChange={(e)=> setGender(e.target.value)} placeholder="Gender"   /> <br />     
           <input type="text" value={faculty} onChange={(e)=> setFaculty(e.target.value)} placeholder="Faculty"   /> <br />
           <button onClick={addProduct}>Submit</button>      
      </div>       

    </>

  )
}
