import Image from "next/image";
import { FaGoogle, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#151515]">
            <footer className="max-w-[1440px] w-4/5 mx-auto footer py-16 text-white">
                <aside>
                    <a className="text-xl flex flex-col justify-center items-center text-ellipsis">
                        <Image src="/logo.svg" alt="Loading...." height={50} width={50} />
                        <h3 className="text-xl font-bold">Car Services</h3></a>
                    <p className="text-[#E8E8E8]">Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                    <div className="flex text-xl gap-1">
                        <p className="bg-slate-600 p-2 cursor-pointer rounded-full"><FaGoogle /></p><p className="bg-slate-600 p-2 cursor-pointer rounded-full"><FaTwitter /></p><p className="bg-slate-600 p-2 cursor-pointer rounded-full"><FaInstagramSquare /></p><p className="bg-slate-600 p-2 cursor-pointer rounded-full"><FaLinkedin /></p>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Why Car Doctor</a>
                    <a className="link link-hover">About</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Support Center</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Accesbility</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;