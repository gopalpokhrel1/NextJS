import Link from "next/link";


export default function Page() {
  return (
    <div>
        <h1>Welcome to seller Page</h1>
        <Link href='/products'>Go to products page</Link>
    </div>
  )
}
