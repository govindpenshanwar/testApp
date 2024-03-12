import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/DbConfig/DbConnect";
import User from "@/models/userModel";
import bcrypytjs from "bcryptjs";

export async function POST(request = NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        console.log(
            "Username => ",
            username,
            "email => ",
            email,
            "Password => ",
            password
        );

        const findUser = await User.findOne({ email });

        if (findUser) {
            return NextResponse.json({
                error: "User Already Exists ",
                status: 400,
            });
        }

        //Hashing Password
        const salt = await bcrypytjs.genSalt(10);
        const hashedPassword = await bcrypytjs.hash(password, salt);

        const savedUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await savedUser.save();
        return NextResponse.json({
            success: true,
            message: "Data Submitted Successfully",
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message,
        });
    }
}

connect();
