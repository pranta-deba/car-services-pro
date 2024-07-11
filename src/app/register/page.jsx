"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import toast from 'react-hot-toast';
import axios from 'axios';
import { FaSpinner } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const page = () => {
    const { push } = useRouter();
    const [useLoader, setUseLoader] = useState(false);
    const handleSignUp = async e => {
        e.preventDefault();
        setUseLoader(true)
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cPassword = e.target.cPassword.value;
        if (password !== cPassword) {
            toast.error("Password is matches!")
            setUseLoader(false)
            return;
        }
        const newUser = { email, password };
        const res = await axios.post('http://localhost:3000/register/api', newUser);
        if (res.status === 200) {
            e.target.reset();
            toast.success("Registration Successful!");
            setUseLoader(false);
            push('/');
        } else {
            toast.error("User already registered!");
            setUseLoader(false)
        }
    }
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="flex-1 text-center lg:text-left">
                    <Image src="./images/login/login.svg" width={500} height={300} alt="loading...." />
                </div>
                <div className="flex-1 card shadow-2xl border py-4">
                    <h1 className="text-center text-4xl text-[#444] font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm Password" className="input input-bordered" name="cPassword" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#FF3811] text-white" disabled={useLoader}>Sign Up {useLoader && <FaSpinner className='animate-spin' />}</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p>Or Sign In with</p>
                        <div className="flex items-center justify-center gap-4 py-2">
                            <button className="hover:scale-105"><FcGoogle size={20} /></button>
                            <button className="hover:scale-105"><FaGithub size={20} /></button>
                            <button className="hover:scale-105"><FaLinkedin size={20} /></button>
                        </div>
                        <p>Already have an account? <Link href={'/login'} className="text-[#FF3811] font-bold">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;