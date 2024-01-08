import file from './style.module.css'
import outside from '@/outsidefile/outside.module.css'


export default function Home() {

  return (
    <>
         <h1 className={file.main}>Modular css</h1>
         <h2 className={outside.main}>Outside file</h2>
    </>
    
  )
}
