'use client'

import { useEffect, useState } from "react"

export default function Page({params}) {

    const id = params.userId;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  useEffect(()=>{
    getuser()
  }, []);


  const getuser = async()=>{
    let data = await fetch('http://localhost:3000/api/user/'+id);

    data= await data.json();

    setName(data.result.name);
    setAge(data.result.age);
    setGender(data.result.gender);
    

    
  }

  const updateUser = async()=>{
    let data = await fetch('http://localhost:3000/api/user/'+id, {method:'PUT', body:JSON.stringify({name,age,gender})});

    data= await data.json();

    console.log(data);


  }
  return (
    <>
      <h1>User details</h1>

      <input type="text" value={name} onChange={(e)=> setName(e.target.value) } placeholder="fullname" />
      <input type="text" value={age} onChange={(e)=> setAge(e.target.value) } placeholder="Email" />
      <input type="text" value={gender} onChange={(e)=> setGender(e.target.value) } placeholder="password" />

      <button onClick={updateUser}>Update</button>


    </>
  )
}
