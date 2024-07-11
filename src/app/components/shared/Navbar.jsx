import { BsCart4 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserSecret } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const nav_item = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/service">My Service</Link></li>
        <li><Link href="/blogs">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto md:px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold text-[#444]">
                        {nav_item}
                    </ul>
                </div>
                <Link href={"/"} className="text-xl flex flex-col justify-center items-center text-ellipsis">
                    <Image src="/logo2.svg" alt="Loading" width={50} height={50} />
                    <h3 className="text-xs md:text-xl font-bold">Car Services</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold text-[#444]">
                    {nav_item}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <a className="text-2xl hover:text-[#FF3811] cursor-pointer"><BsCart4 /></a>
                <a className="text-2xl hover:text-[#FF3811] cursor-pointer"><IoSearchOutline /></a>
                {/* <a className="btn border-2 border-[#FF3811] text-[#FF3811]  bg-transparent hover:bg-[#FF3811] hover:text-white text-lg font-semibold">Appointment</a> */}
                <Link href={"/sign_in"} className="btn border-2 border-[#FF3811] text-[#FF3811]  bg-transparent hover:bg-[#FF3811] hover:text-white text-lg font-semibold">Sign in</Link>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-1"><div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <FaUserSecret className="text-[2.40rem]" />
                        </div>
                    </div></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border-2 border-[#FF3811]">
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;