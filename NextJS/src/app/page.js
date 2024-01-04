'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
    const [data, setdata]= useState("Hello");

    const handlefunc = ()=>{
      alert("Hello developer");
      setdata("Hello developer");
    }

    const File = ({name})=>{
      return(
        <div>
        <p>This is my first code in {name}</p>
      </div>
      )
    
    }


  return (
    <main className={styles.main}>
      <File name={data}/>
      <h1>Hello world</h1>

      <button onClick={handlefunc}>Click me</button>

      
    </main>
  )
}


