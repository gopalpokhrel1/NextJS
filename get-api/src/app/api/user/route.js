import {item} from '@/util/db'
import { NextResponse } from 'next/server';

export  function GET(){
     const data = item;
     console.log(data)

     return NextResponse.json(data);
}