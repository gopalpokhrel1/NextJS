import Image from "next/image"
import Photo from '../../public/vercel.svg';

export default function Home() {
  return (
   <>
   <h1>File</h1>
     {/* <Image src={Photo} width={200} height={200}/> */}

     <Image src='https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png'  width={200} height={200}/>
   </>
  )
}
