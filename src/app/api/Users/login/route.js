import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import Jwt from "jsonwebtoken";
import { connect } from "@/DbConfig/DbConnect";

export async function POST(request = NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, password } = reqBody;
        console.log("Username => ", username, "Password => ", password);

        const user = await User.findOne({ username }).maxTimeMS(15000);

        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({
                error: " password doesn't match",
                status: 400
            });
        };

        const tokenData = {
            id: user._id,
            username: user.username
        };

        const token = await Jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "1d" });

        const response = NextResponse.json({
            message: "Login Successfull",
            success: true,
        });

        response.cookies.set("token", token, { httpOnly: true });
        return response;
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        })
    }
}

connect();