import {item} from '@/util/db'
import { NextResponse } from 'next/server';

export function GET(req,content){
    const data = item;

    const id = content.params.id;

    const userData = data.find(p=>p.id==id);

    return NextResponse.json(userData.length==0?{result:"not found"}: {result: userData}, {status:200});
}