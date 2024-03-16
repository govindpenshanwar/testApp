"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Login() {
    const router = useRouter();
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    const handleLogin = async () => {
        try {
            if (loginData.username === "" || loginData.password === "") {
                alert("Please enter login credentials");
            } else {
                const resposne = await axios.post("/api/Users/login", loginData);

                if (resposne.status === 400) {
                    alert(resposne.error);
                } else {
                    const newUser = resposne.data;
                    console.log("Login Data => ", newUser);
                    router.push("/profile");
                }
            }
        } catch (error) {
            console.error("Error at Login page => ", error.message);
        }
    };
    return (
        <div className="flex flex-col gap-8 text-center items-center justify-center mt-20">
            <h1>This is Login Page</h1>
            <input
                type="text"
                value={loginData.username}
                className="text-black p-2"
                onChange={(e) =>
                    setLoginData({ ...loginData, username: e.target.value })
                }
            />
            <input
                type="text"
                className="text-black p-2"
                value={loginData.password}
                onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                }
            />
            <button onClick={handleLogin}>Login</button>

            <Link href={"signUp"}>SignUp</Link>
        </div>
    );
}

export default Login;
