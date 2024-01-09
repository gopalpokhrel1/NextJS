import getusers from "../../../../getusers/getusers";

export default async function page({params}) {

    const data = getusers();

    const file =await data;

    const currentData  = file.users;

   const showdata = currentData[params.userdata-1];



    
  return (
    <>
      <h1>Hello guys welcome to my kingdom</h1>
         
         <ul>
            <li>{showdata.id}</li>
            <li>{showdata.firstName}</li>
            <li>{showdata.age}</li>
            <li>{showdata.gender}</li>
         </ul>
    </>
  )
}

export  async function generaStaticParams(){
    const data = getusers();

    const file =await data;

    const currentData  = file.users;


    {
        currentData.map((item)=>({
            userdata:item.id.toString()
        }))
    }
}
