'use client'

import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter();
  return (
  <>
     <h1>Hello, Welcome to Nextjs </h1>
     <button onClick={()=> router.push('/login')}>vist login page</button>  
  </>
  )
}
