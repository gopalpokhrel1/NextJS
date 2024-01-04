'use client'

import { useRouter } from "next/navigation"

const Studentlogin = ()=>{
    const router = useRouter();
    const navigate = (file)=>{
        router.push(file);
    }
    return(
        <>
          <h1>Student login page</h1>
          <button onClick={()=> navigate('/')}>Go to home page</button>
        </>
    )
}

export default Studentlogin;