import Image from "next/image";

const Banner = () => {
    return (
        <div className="carousel w-full max-h-[600px] rounded-lg ">
            {
                banners.map((b, i) => (
                    <div key={i} id={`slide${i + 1}`} className="carousel-item relative w-full">
                        <Image src={`/images/banner/${i + 1}.jpg`} alt="Loading.........." width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }} />
                        <div className="bg-gradient-to-r from-[#151515] to-[#15151500] h-full absolute space-y-5  left-0 right-0 bottom-0 text-white flex flex-col justify-center px-8 md:px-24">
                            <h1 className="font-bold text-3xl md:text-6xl lg:w-[500px]">{b.title}</h1>
                            <p className="hidden md:flex lg:w-[500px]">{b.des}</p>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex gap-3 flex-col md:flex-row">
                                    <button className="btn btn-sm md:btn-md border-none outline-none bg-[#FF3811] text-white hover:text-black">Discover More</button>
                                    <button className="btn btn-sm md:btn-md bg-transparent text-white hover:text-black">Latest Project</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href={b.prev} className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❮</a>
                            <a href={b.next} className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❯</a>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

const banners = [
    {
        title: "Affordable Price For Car  Servicing",
        des: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        prev: '#slide6',
        next: '#slide2',
    },
    {
        title: "Affordable Price For Car Servicing",
        des: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        prev: '#slide1',
        next: '#slide3',
    },
    {
        title: "Affordable Price For Car Servicing",
        des: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        prev: '#slide2',
        next: '#slide4',
    },
    {
        title: "Affordable Price For Car Servicing",
        des: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        prev: '#slide3',
        next: '#slide5',
    },
    {
        title: "Affordable Price For Car Servicing",
        des: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        prev: '#slide4',
        next: '#slide6',
    },
    {
        title: "Affordable Price For Car Servicing",
        des: 'There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form',
        prev: '#slide5',
        next: '#slide1',
    },
]

export default Banner;