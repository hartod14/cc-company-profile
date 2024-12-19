import Image from 'next/image';
import React from 'react';
import { ArrowRight } from '@mui/icons-material';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-8">
                <div>
                    <Image
                        src="/logistica.png"
                        width={150}
                        height={150}
                        alt="logistica.logo"
                        className="mb-4"
                    />
                    <p className="mb-2 flex items-center">
                        123 Street, New York, USA
                    </p>
                    <p className="mb-2 flex items-center">
                        +012 345 67890
                    </p>
                    <p className="flex items-center">
                        info@example.com
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Services</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <ArrowRight fontSize="small" className="mr-2" />
                            Air Freight
                        </li>
                        <li className="flex items-center">
                            <ArrowRight fontSize="small" className="mr-2" />
                            Sea Freight
                        </li>
                        <li className="flex items-center">
                            <ArrowRight fontSize="small" className="mr-2" />
                            Road Freight
                        </li>
                        <li className="flex items-center">
                            <ArrowRight fontSize="small" className="mr-2" />
                            Logistic Solutions
                        </li>
                        <li className="flex items-center">
                            <ArrowRight fontSize="small" className="mr-2" />
                            Industry Solutions
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <Link href={"/about-us"}>
                                <ArrowRight fontSize="small" className="mr-2" />
                                About Us
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <Link href={"/services"}>
                                <ArrowRight fontSize="small" className="mr-2" />
                                Services
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <Link href={"/teams"}>
                                <ArrowRight fontSize="small" className="mr-2" />
                                Teams
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                    <p className="mb-4">Subscribe to our newsletter to get the latest updates and news.</p>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded bg-gray-800 border border-gray-700 text-white"
                        />
                        <button
                            type="submit"
                            className="py-2 px-4 bg-primary hover:bg-[#ec3d40] text-white font-bold rounded"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center mt-12 border-t border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} Logistica. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
