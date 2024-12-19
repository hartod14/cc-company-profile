"use client";

import React from 'react';
import Image from 'next/image';
import HistoryIcon from '@mui/icons-material/History'; // MUI History Icon
import PeopleIcon from '@mui/icons-material/People'; // MUI People Icon
import BusinessIcon from '@mui/icons-material/Business'; // MUI Business Icon
import Link from 'next/link';

const teamMembers = [
    {
        name: "John Doe",
        title: "CEO",
        description: "John has over 20 years of experience leading logistics companies and has a deep understanding of the industry's challenges and opportunities.",
        image: "/home/testi3.jpg",
    },
    {
        name: "Jane Smith",
        title: "Marketing Director",
        description: "Jane brings a creative approach to marketing and has helped expand the company's brand recognition across multiple regions.",
        image: "/home/testi2.jpg",
    },
    {
        name: "Mark Wilson",
        title: "Operations Manager",
        description: "Mark oversees daily operations and ensures our services meet the highest standards of efficiency and customer satisfaction.",
        image: "/home/testi4.jpg",
    },
];

export default function AboutUs() {
    return (
        <div className="container mx-auto  px-8 md:px-32 pt-32 py-16">
            {/* Company History Section */}
            <section className="mb-16">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <HistoryIcon className="text-primary" sx={{ fontSize: 30 }} />
                    <h2 className="text-primary font-bold text-4xl">Our History</h2>
                </div>
                <p className="text-center text-gray-600 mb-8">
                    Founded in 1990, we have grown from a small logistics company to a trusted leader in the industry, providing
                    reliable and efficient services worldwide. Over the years, we've achieved numerous milestones and built
                    a reputation for excellence.
                </p>
                <div>
                    <Image
                        src="/about-us/we_are.jpg" // Add a relevant history image
                        alt="Our History"
                        width={960}
                        height={744}
                        className="mx-auto rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* Team Section */}
            <section className="">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <PeopleIcon className="text-primary" sx={{ fontSize: 30 }} />
                    <h2 className="text-primary font-bold text-4xl">Meet Our Team</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
                            <div className="mb-4 flex  justify-center">
                                <div className='w-24'>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={240}
                                        height={240}
                                        className="rounded-full border-4 border-gray-300"
                                    />
                                </div>
                            </div>
                            <h4 className="text-primary font-semibold mb-2">{member.name}</h4>
                            <p className="text-gray-600 mb-4 font-semibold">{member.title}</p>
                            <p className="text-gray-600">{member.description}</p>
                        </div>
                    ))}
                </div>
                <Link target='_blank' href={`/teams`}>
                    <div className="text-center py-12">
                        <button className="text-sm text-primary border border-primary px-3 py-1 rounded hover:bg-primary hover:text-white transition-colors duration-300">
                            Explore More
                        </button>
                    </div>
                </Link>
            </section>

            {/* Culture Section */}
            <section className="lg:flex gap-12 items-center py-8 lg:py-16 mb-10">
                <div className='flex-1'>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <BusinessIcon className="text-primary" sx={{ fontSize: 30 }} />
                        <h2 className="text-primary font-bold text-4xl">Our Culture & Values</h2>
                    </div>
                    <p className="text-center text-gray-600 mb-8">
                        At our company, we believe in a culture of collaboration, innovation, and integrity. We encourage a
                        supportive and inclusive environment where every team member can thrive. Our core values include
                        customer satisfaction, continuous improvement, and sustainability. We are committed to making a positive
                        impact on the communities we serve.
                    </p>
                </div>
                <div className='flex-1'>
                    <Image
                        src="/about-us/teamwork.jpg" // Add a relevant culture image
                        alt="Company Culture"
                        width={800}
                        height={400}
                        className="mx-auto rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* Additional Section: Why Choose Us */}
            <section className="mb-16 bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-primary font-bold text-4xl text-center mb-6">Why Choose Us?</h2>
                <div className="flex justify-center gap-16">
                    <div className="text-center">
                        <h3 className="text-primary font-semibold mb-4">Reliability</h3>
                        <p className="text-gray-800 mb-4">
                            Our team ensures timely deliveries and top-notch customer service.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-primary font-semibold mb-4">Innovation</h3>
                        <p className="text-gray-800 mb-4">
                            We embrace new technologies and methods to improve our services.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-primary font-semibold mb-4">Sustainability</h3>
                        <p className="text-gray-800 mb-4">
                            We prioritize sustainable practices and eco-friendly solutions.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
