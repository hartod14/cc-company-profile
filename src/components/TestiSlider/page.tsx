"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
const testimonials = [
    {
        name: "John Doe",
        profession: "CEO of Company XYZ",
        description:
            "This company provided exceptional logistics services, delivering our goods on time and with great care. Highly recommended!",
        image: "/home/testi3.jpg",
    },
    {
        name: "Jane Smith",
        profession: "Marketing Director at ABC Corp",
        description:
            "We have been using their services for years, and we’re always impressed by their reliability and professionalism. The team is top-notch!",
        image: "/home/testi2.jpg",
    },
    {
        name: "Mark Wilson",
        profession: "Operations Manager at DEF Logistics",
        description:
            "Their services are unparalleled. From customer service to delivery speed, we trust them with all our logistics needs.",
        image: "/home/testi3.jpg",
    },
    {
        name: "Sarah Johnson",
        profession: "Logistics Manager at GHI Enterprises",
        description:
            "A fantastic logistics partner who always ensures our shipments are delivered on time. Their customer support is excellent!",
        image: "/home/testi4.jpg",
    },
    {
        name: "Emily Davis",
        profession: "Chief Operations Officer at JKL Freight",
        description:
            "We couldn't ask for a better logistics partner. They are efficient, reliable, and always go above and beyond to meet our needs.",
        image: "/home/testi1.jpg",
    },
];

export default function TestiSlider() {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="py-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex justify-center mb-6">
                                <Image
                                    width={240}
                                    height={240}
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-full border-4 border-gray w-24 h-24 object-cover shadow-lg"
                                />
                            </div>
                            <h4 className="font-semibold text-xl mb-2">{testimonial.name}</h4>
                            <p className="font-medium text-gray-500 mb-4">{testimonial.profession}</p>
                            <p className="text-gray-700 italic">"{testimonial.description}"</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
