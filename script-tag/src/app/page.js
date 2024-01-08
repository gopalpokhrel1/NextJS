'use client'
import Script from 'next/script'

export default function Home() {
  return (
       <>
         <Script src='/location.js' onLoad={()=> console.log("loading")}/>

         <h1>welcome to browser</h1>
       </>

    )
}
