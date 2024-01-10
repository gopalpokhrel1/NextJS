import {item} from '@/util/db'
import { NextResponse } from 'next/server';

export  function GET(){
     const data = item;
     

     return NextResponse.json(data);
}

export async function POST(request){
     const payload = await request.json();

     if(!payload.fullname || !payload.email || !payload.password){
             
          return NextResponse.json({result:"Error"});
     
     }
     else{
          return NextResponse.json( {name:`${payload.fullname}`, password:`${payload.password}`, email:`${payload.email}`, status:true});
     }

     
}