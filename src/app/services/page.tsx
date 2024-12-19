"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TestiSlider from "@/components/TestiSlider/page";

const services = [
    {
        title: "Air Freight",
        description: "Efficient and timely air transport solutions for all your urgent deliveries.",
        price: "Contact us for a personalized quote",
        additionalDescription: `
      Air Freight services provide fast and reliable air transportation for goods that need to be delivered quickly. We offer a variety of shipping options, ensuring that your shipments are handled with care and delivered on time.
      
      **Key Features:**
      - Speedy delivery times, often within 24-48 hours
      - Global coverage
      - Insurance options available
      - Real-time tracking for peace of mind

      **Target Audience:**
      Businesses and individuals who need urgent deliveries across long distances.

      **Why Choose This Service?**
      Air Freight offers the fastest shipping option available, ensuring that your products reach their destination swiftly and safely.
    `,
        image: "/home/air.jpg",
    },
    {
        title: "Ocean Freight",
        description: "Cost-effective and reliable sea transport for large shipments.",
        price: "Starting at $99.99 per shipment",
        additionalDescription: `
      Ocean Freight provides affordable shipping solutions for larger shipments that are not time-sensitive. It’s the best choice for companies looking to move large volumes of goods overseas.

      **Key Features:**
      - Competitive rates for large shipments
      - Suitable for heavy, bulky goods
      - Flexible shipping schedules
      - Global delivery options

      **Target Audience:**
      Importers, exporters, and businesses needing to ship large quantities of goods.

      **Why Choose This Service?**
      Ocean Freight is an economical and reliable choice for shipping large volumes of goods internationally.
    `,
        image: "/home/ocean.jpg",
    },
    {
        title: "Road Freight",
        description: "Flexible and dependable road transport for regional deliveries.",
        price: "Starting at $49.99 per shipment",
        additionalDescription: `
      Road Freight offers dependable transport for goods over land. Whether it's across cities, states, or countries, we ensure your goods arrive on time and in perfect condition.

      **Key Features:**
      - Flexible and reliable delivery
      - Can accommodate a wide range of cargo
      - Affordable pricing for short and long-distance deliveries

      **Target Audience:**
      Companies that need reliable and cost-effective road transport for regional deliveries.

      **Why Choose This Service?**
      Road Freight provides a flexible and reliable service with affordable pricing for local and regional shipments.
    `,
        image: "/home/road.jpg",
    },
    {
        title: "Train Freight",
        description: "Eco-friendly and economical train transport for bulk goods.",
        price: "Contact us for a personalized quote",
        additionalDescription: `
      Train Freight offers an eco-friendly solution for transporting bulk goods over long distances. It's an ideal option for heavy, bulky shipments that require a sustainable transport solution.

      **Key Features:**
      - Eco-friendly option for bulk goods
      - Reliable, on-time delivery
      - Suitable for heavy or oversized goods

      **Target Audience:**
      Businesses looking for eco-friendly and cost-effective bulk transport solutions.

      **Why Choose This Service?**
      Train Freight combines sustainability and efficiency, offering a reliable and cost-effective way to ship bulk goods over long distances.
    `,
        image: "/home/train.jpg",
    },
    {
        title: "Customs Clearance",
        description: "Seamless customs clearance to ensure hassle-free global trade.",
        price: "Starting at $199.99 per shipment",
        additionalDescription: `
      Our Customs Clearance service ensures that your goods move across borders smoothly and without delays. We handle all the necessary documentation and clearance procedures to ensure compliance with regulations.

      **Key Features:**
      - Full documentation management
      - Fast clearance to avoid shipping delays
      - Compliance with all customs regulations

      **Target Audience:**
      Importers and exporters who need to navigate the complexities of global trade.

      **Why Choose This Service?**
      With our Customs Clearance service, you can avoid the headaches of border delays and regulations, ensuring your goods move seamlessly across borders.
    `,
        image: "/home/customs.jpg",
    },
    {
        title: "Warehouse Solutions",
        description: "Secure and scalable warehousing options tailored to your needs.",
        price: "Starting at $99.99/month",
        additionalDescription: `
      Warehouse Solutions offer secure and flexible storage options for your goods. Whether you're an e-commerce business or need short-term storage, our facilities are equipped to handle your storage needs.

      **Key Features:**
      - Flexible storage options (short-term and long-term)
      - Climate-controlled storage for sensitive items
      - Inventory management services available

      **Target Audience:**
      E-commerce businesses, importers, or anyone needing secure and scalable storage solutions.

      **Why Choose This Service?**
      We provide secure, flexible, and cost-effective storage solutions, ensuring your goods are stored safely and are easy to access whenever needed.
    `,
        image: "/home/warehouse.jpg",
    },
];

export default function ServicesPage() {
    const [expandedServiceIndex, setExpandedServiceIndex] = useState(null);

    const toggleDescription = (index: any) => {
        setExpandedServiceIndex(expandedServiceIndex === index ? null : index);
    };

    return (
        <section id="services" className="pt-32 py-16 px-8 md:px-32 bg-gray-100">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-xl font-bold mb-4 text-primary">Our Services</h2>
                <h3 className="text-4xl font-semibold mb-6">Explore our range of logistics services</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg group hover:shadow-xl transition duration-300"
                        onClick={() => toggleDescription(index)}
                    >
                        <div className="mb-6">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={600}
                                height={400}
                                className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>

                            <Link href="javascript:void(0)" className="flex items-center text-primary font-medium">
                                <ArrowForwardIcon className="mr-2 transition-transform group-hover:translate-x-1" />
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    {`Read More about ${service.title}`}
                                </span>
                            </Link>

                        </div>

                        {expandedServiceIndex === index && (
                            <div className="bg-gray-50 p-4 rounded-lg mb-4 text-gray-700">
                                <p>{service.additionalDescription}</p>
                                {service.price && (
                                    <div className="mt-4 text-xl font-semibold text-primary">
                                        Price: {service.price}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <section id="testimonials" className="py-16 px-8 md:px-32 bg-gray-100">
                <div className="container mx-auto text-center mb-4">
                    <h2 className="text-xl font-bold mb-4 text-primary">Testimonial</h2>
                    <h3 className="text-4xl font-semibold">Our Clients Say!</h3>
                </div>
                <TestiSlider />
            </section>
        </section>
    );
}
