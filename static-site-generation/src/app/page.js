import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
 <>
    <h1>Welcome to Static Site Generation</h1>
    <Link href='/userdetails'>Go to user details</Link>
   
 </>
  )
}
