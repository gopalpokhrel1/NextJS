'use client'

import './App.css'
import Link from "next/link"
import { usePathname } from 'next/navigation'
export default function Layout({ children }) {
    const pathname = usePathname();

    return (
        <>
            {
                pathname!=="/login/teacherlogin"?
                <div>
          <h1 className='heading'>Welcome Page</h1>

          <ul className='login'>
            <li><Link href='/login/studentlogin'>stLogin</Link></li>
            <li><Link href='/login/teacherlogin'>telogin</Link></li>
          </ul>
          </div> : null}
          
            {children}
        </>
    )
}