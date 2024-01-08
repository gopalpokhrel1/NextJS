import Product from "./product";

async function product(){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();

    return data.products
}

export default async function Productlist(){

    let data = await product();
    
    return(
        <>
        <h1>Products</h1>
        {
           data.map((item)=>{
            return(
                <>
                Name:{item.title}  <Product price={item.price}/> <br />
                
                </>
            )
           })
        }
        </>
    )
}