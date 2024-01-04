'use client'

import { useRouter } from "next/navigation";
const Login = ()=>{
    const router = useRouter();
    return(
        <>
        <h1>Login page</h1>
        <button onClick={()=> router.push('/')}>GO to home page</button>
        </>
    )
}

export default Login;