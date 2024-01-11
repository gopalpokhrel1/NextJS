import { connectSrt } from "@/connect/db";
import { Products } from "@/connect/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export  async function GET() {
 
  let data = [];

  try{
    await mongoose.connect(connectSrt)

     data = await Products.find();

    
  }
  catch(err){
    return NextResponse.json({success:false});
  }

  return NextResponse.json({result:data, success:true});
}


export async function POST(){
    await mongoose.connect(connectSrt);

    let product = new Products({
        name:"Mahadev",
        age:'30',
        gender:'male',
        faculty:'bca'
    });

    const result = await product.save();

    return NextResponse.json({result, success:true});
}
