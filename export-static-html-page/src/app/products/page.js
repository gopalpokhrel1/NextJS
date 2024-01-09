import User from "@/components/user";
import Link from "next/link";


export default function Page() {
  return (
    <>
        <h1>This is Products Page</h1>
        <Link href='/seller'>Go to seller page</Link>
        <User/>
    </>
  )
}
