'use client'

import { useRouter } from "next/navigation";
const Login = ()=>{
    const router = useRouter();
    return(
        <>
        <h1>Login page</h1>
        <button onClick={()=> router.push('/')}>GO to home page</button>
        <button onClick={()=> router.push('/login/studentlogin')}>Go to student login portol</button>
        </>
    )
}

export default Login;