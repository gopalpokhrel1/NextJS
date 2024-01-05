import Link from "next/link"

export default function Studentlist(){
    return(
        <>
        <h1>Welcome to Student list</h1>
        <ul>
            <li>
                <Link href='/studentlist/1'>First</Link>
                <Link href='/studentlist/2'>Second</Link>
                <Link href='/studentlist/3'>Third</Link>
                <Link href='/studentlist/4'>Fourth</Link>
            </li>
        </ul>
        </>
    )
}