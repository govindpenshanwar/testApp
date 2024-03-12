import mongoose  from "mongoose";
import { NextResponse } from "next/server";

export async function connect(){
    try {
        const mongoURI = process.env.MONGODB_URI;
        await mongoose.connect(mongoURI).then(()=> {
            console.log("DB Connected");
        }).catch((e) => {
            console.error(e.message);
        })
        
    } catch (error) {
        return NextResponse.json({
            success : false,
            error : error.message
        })
    }
}