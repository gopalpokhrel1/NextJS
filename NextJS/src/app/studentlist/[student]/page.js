'use client'

export default function Student({params}){

    console.log(params);
    return(
        <>
         <h1>Welcome to student list</h1>   
         <h2>id: {params.student}</h2>     
        </>
    )
}