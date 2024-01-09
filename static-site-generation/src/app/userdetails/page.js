import Link from "next/link";
import getusers from "../../../getusers/getusers"

export default async function Page() {
 const data =  getusers();
 
 const file = await data;

 const user = file.users;


 

 

  return (
    <>

    <h1>User list</h1>
    {
        user.map((item)=>{
            return(
                <>
                <h2 key={item.id}>
                <Link href={`/userdetails/${item.id}`}>{item.firstName} <br /></Link>
                </h2>
                </>
            )
        })
    }
      
    </>
  )
}
