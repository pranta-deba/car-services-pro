import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
    const { _id, title, price, img } = service || {};
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="h-[250px] overflow-hidden"><Image src={img} alt={title} width={400} height={400} className="h-full object-cover  rounded-t-xl" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-around w-full">
                    <p className="text-[#FF3811] font-bold text-xl">${price}</p>
                    <Link href={`/`} className="flex justify-end">
                        <svg className="p-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;