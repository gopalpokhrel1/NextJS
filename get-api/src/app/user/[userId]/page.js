const getuser = async function(id){

    let data = await fetch(`http://localhost:3000/api/user/${id}`);
    data= await data.json();


    return data.result;

}

export default async function Page({params}){

  const file =await getuser(params.userId);
  return(
    <ul>
    <li>{file.id}</li>
    <li>{file.name}</li>
    <li>{file.age}</li>
    <li>{file.gender}</li>
  </ul>

  )

 

  





}