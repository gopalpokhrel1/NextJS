'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Home() {
    const [data, setdata]= useState("Hello");

    const router = useRouter();

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

       <Link href="/login">Go to login page</Link>
       
       <br />
      <Link href="/about">Go to about page</Link> 
      <br />
      <br />
      <button onClick={()=> router.push('/login')}>Go to login page</button>
      <br />
      <button onClick={()=> router.push('/about')}>Go to about page</button>

      
    </main>
  )
}


