import { connectSrt } from "@/connect/db";
import { Products } from "@/connect/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req, con){

    const productId = con.params.projectid;

    const filter = {_id:productId};

    const payload = await req.json();

    await mongoose.connect(connectSrt);

    const result = await Products.findOneAndUpdate(filter, payload);

    return NextResponse.json({result:'Nice', success:true});

}

export async function DELETE(req, content){
    const data = content.params.projectid;

    const record = {_id:data};

    mongoose.connect(connectSrt);

    const result = await Products.deleteOne(record);

    return NextResponse.json({result:"Deleted"});
}