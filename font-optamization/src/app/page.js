import { Roboto } from "next/font/google"
const roboto= Roboto({
  weight:"100",
  subsets:['latin'],
  display:'swap'
})

export default function Home() {
  return (
   <>
     <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, asperiores.</h1>
     <h2 className={roboto.className}>Lorem ipsum dolor sit.</h2>
   </>
  )
}
