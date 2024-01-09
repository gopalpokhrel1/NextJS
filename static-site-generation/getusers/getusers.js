export default async function getusers(){
 
    const data = await fetch('https://dummyjson.com/users');
    return data.json()

}