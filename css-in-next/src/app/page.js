'use client'
import { useState } from 'react'
import file from './style.module.css'



export default function Home() {

  const [color, setColor] = useState('red');
  const {red}= file;

  return (
    <>
     <h1 className={color=='red'?file.red:file.green}>Heading tag 1</h1>
     <h2 style={{backgroundColor: color=='red'?"red":"green"}}>Heading tag 2</h2>
     <h3 id={file.black}>Heading tag 3</h3>

     <button onClick={()=> setColor('green')}>Change Color</button>

    <h4 className={red}>Last tag</h4>
    <h4 className={red}>Last tag</h4>
    <h4 className={red}>Last tag</h4>
    <h4 className={red}>Last tag</h4>
    </>
    
  )
}
