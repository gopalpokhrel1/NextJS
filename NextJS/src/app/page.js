'use client'

import styles from './page.module.css'
import Link from 'next/link'



export default function Home() {


  

  return (
   <>
     <h1>Welcome to Routing portion</h1>
     <Link href='/productlist'>Go to Productlist</Link>
   </>
  )
}


