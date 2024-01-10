import Delete from "@/util/delete";
import Link from "next/link";

const getuser = async function(){
    let data = await fetch('http://localhost:3000/api/user');
    data = await data.json();
    return data;
}

export default  async function Page() {
    const file = await getuser();



  return (
    <div>
        <h1>User Details</h1>
        {
            file.map((item)=>{
                return(
                    <>
                    <Link href={`/user/${item.id}`}>{item.name}</Link> 
                    <span><Link href={`/user/${item.id}/update`}> Edit</Link></span>
                    <span><Delete id={item.id}/></span> <br />
                    </>
                    
                )
            }
            )
        }  
    </div>
  )
}
