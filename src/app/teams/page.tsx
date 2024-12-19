"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { GitHub, LinkedIn, Email } from "@mui/icons-material"; // Import the icons

interface TeamMember {
    name: string;
    picture: string;
    email: string;
    phone: string;
    location: string;
    title: string;
}

export default function TeamsPage() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

    useEffect(() => {
        // Fetch team members from randomuser.me
        fetch("https://randomuser.me/api/?results=6&nat=us")  // You can adjust the number of members here
            .then((response) => response.json())
            .then((data) => {
                const members = data.results.map((member: any) => ({
                    name: `${member.name.first} ${member.name.last}`,
                    picture: member.picture.large,
                    email: member.email,
                    phone: member.phone,
                    location: `${member.location.city}, ${member.location.country}`,
                }));
                setTeamMembers(members);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <section id="team" className="pt-32 py-16 px-8 md:px-32 bg-gray-100">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-xl font-bold mb-4 text-primary">Meet Our Team</h2>
                <h3 className="text-4xl font-semibold mb-6">Our Amazing Team Members</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="mb-6">
                            <Image
                                src={member.picture}
                                alt={member.name}
                                width={150}
                                height={150}
                                className="rounded-full mx-auto border-4 border-gray object-cover"
                            />
                        </div>
                        <div className="text-gray-700 mb-3">
                            <h3 className="text-2xl font-bold text-center text-primary mb-3">{member.name}</h3>
                            <h4 className="font-medium text-center text-gray-900 mb-4">Logistica Team</h4>
                            <p className="text-gray-600 text-sm">
                                {`With years of experience in logistics and a passion for operational excellence, ${member.name} plays a crucial role in driving the success of our services.`}
                            </p>
                        </div>
                        <div className="flex justify-center mt-4 space-x-4">
                            {/* Social Media Icons */}
                            <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                                <Email className="text-gray-600 hover:text-primary transform transition-transform duration-300 hover:scale-125" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <GitHub className="text-gray-600 hover:text-primary transform transition-transform duration-300 hover:scale-125" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <LinkedIn className="text-gray-600 hover:text-primary transform transition-transform duration-300 hover:scale-125" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
