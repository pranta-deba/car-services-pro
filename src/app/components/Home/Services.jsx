import React from 'react';
import ContentTitle from '../ContentTitle/ContentTitle';
import {services} from '../../../lib/services' ;
import ServiceCard from '../Card/ServiceCard';

const Services = () => {

    return (
        <div className=" px-3 md:px-0">
            <ContentTitle title='Service' subTitle='Our Service Area' description='the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                {
                    services.map(service => (
                        <ServiceCard key={service._id} service={service}></ServiceCard>
                    ))
                }

            </div>
            <div className="text-center my-10">
                <a className="btn border-2 border-[#FF3811] text-[#FF3811]  bg-transparent hover:bg-[#FF3811] hover:text-white text-lg font-semibold">More Services</a>
            </div>
        </div>
    );
};

export default Services;