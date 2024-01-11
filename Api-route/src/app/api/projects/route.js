import { connectSrt } from "@/connect/db";
import { Products } from "@/connect/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export  async function GET() {
 
    await mongoose.connect(connectSrt)

    const data = await Products.find();

    return NextResponse.json({result:data});
}
