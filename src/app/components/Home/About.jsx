import Image from "next/image";
const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row md:gap-36">
                <div className="flex-1 md:relative space-y-5 md:space-y-0">
                    <Image src="/images/about_us/person.jpg" width={900} alt="Loading..."
                        height={900} className="rounded-lg shadow-2xl" />
                    <Image src="/images/about_us/parts.jpg" width={300} alt="Loading..."
                        height={300} className="md:absolute md:md:-bottom-16 md:md:-right-16  rounded-lg md:p-3 md:bg-white" />
                </div>
                <div className="flex-1 space-y-5">
                    <h1 className="text-xl font-bold text-[#FF3811]">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn border-none outline-none bg-[#FF3811] text-white hover:text-black">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;