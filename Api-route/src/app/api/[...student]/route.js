import { NextResponse } from "next/server";

export  function GET(req,con){
     const parameter= con.params.student;

     console.log(parameter);

     return NextResponse.json({result:"true"});
}