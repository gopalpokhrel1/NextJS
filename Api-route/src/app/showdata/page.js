

const getuser = async()=>{
    let data = await fetch('http://localhost:3000/api/projects');
    data = await data.json();

    return data.result;


}



export default async function Page() {

    const data = await getuser();

    console.log(data);





    

 

    
  return (
    <>
      <h1>Show list</h1>

      <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>gender</td>
                <td>Faculty</td>
            </tr>
        </thead>
        <tbody>
          
          {
            data.map((item)=>{
                return(
                    <>
                     <tr>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.faculty}</td>
                     </tr>
                    </>
                )
            })
          }
        
        </tbody>



      </table>
    </>
  )
}
