'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";



const About =()=>{

    const router = useRouter();

    return(
        <>
        <h1>About page</h1>
        <Link href='/about/aboutcollege'>Go to about college</Link>
        <button onClick={()=> router.push('/')}>Go to home page</button>
        </>
    )
}

export default About;