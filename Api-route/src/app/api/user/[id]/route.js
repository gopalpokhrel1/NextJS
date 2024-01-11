import {item} from '@/util/db'
import { NextResponse } from 'next/server';

export function GET(req,content){
    const data = item;

    const id = content.params.id;

    const userData = data.find(p=>p.id==id);

    return NextResponse.json(userData.length==0?{result:"not found"}: {result:userData}, {status:200});
}


export async function PUT(req, content){
    let payload = await req.json();



    return NextResponse.json({result:payload});
}

export async function DELETE(req,content){
    let id = content.params.id;

    if(id){
        return NextResponse.json({result:"Deleted"})
    }
    else{
        return NextResponse.json({reult:"Not deleted"});
    }
}