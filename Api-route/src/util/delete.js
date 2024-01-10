'use client'

export default function Delete({id}) {

  const userid = id;

    

    const deleteuser=async()=>{
      let data = await fetch('http://localhost:3000/api/user/'+userid, {
        method:'delete'
      })

      data= await data.json();

      console.log(data);
    }
  return (
    <div>
      <button onClick={deleteuser}>Delete</button>
    </div>
  )
}
