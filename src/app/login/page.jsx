"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from "next-auth/react";

const page = () => {
    const handleSignIn = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false
        })
        console.log(res);
    }
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="flex-1 text-center lg:text-left">
                    <Image src="./images/login/login.svg" width={500} height={300} alt="loading...." />
                </div>
                <div className="flex-1 card shadow-2xl border py-4">
                    <h1 className="text-center text-4xl text-[#444] font-bold">Login</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white">Login</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p>Have an account? <Link href={'/register'} className="text-[#FF3811] font-bold">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;