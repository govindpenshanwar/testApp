"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function SignUpPage() {
    const router = useRouter();
    const [signUpData, setSignUpData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSignUp = async () => {
        try {
            if (signUpData.email === "" || signUpData.username === "" || signUpData.password === "") {
                alert("Please SignUp Credentials");
            } else {
                const response = await axios.post('/api/Users/signUp', signUpData);
                const newUser = response.data;
                console.log("New Resgistred User => ", newUser);
                router.push('/login');
            }
        } catch (error) {
            console.error("Err at signUpPage => ", error.message);
        }
    }
    return (
        <div className="flex flex-col gap-8 text-center items-center justify-center mt-20">
            <h1>This is signUp Page</h1>
            <input
                type="text"
                className="text-black p-2"
                value={signUpData.username}
                onChange={(e) => setSignUpData({ ...signUpData, username: e.target.value })}
            />
            <input
                type="text"
                className="text-black p-2"
                value={signUpData.email}
                onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
            />
            <input
                type="text"
                className="text-black p-2"
                value={signUpData.password}
                onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
            />
            <button
                onClick={handleSignUp}
            >SignUp</button>
            <p>Already have an account ?</p>
            <Link href={'login'}>Login</Link>
        </div>
    )
}

export default SignUpPage
