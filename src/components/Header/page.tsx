"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isPostDetailPage = pathname.startsWith("/about-us/");

    useEffect(() => {
        if (isPostDetailPage) return;

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isPostDetailPage]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const getLinkClass = (link: string) => {
        return pathname === link
            ? "text-primary font-semibold"
            : "text-black hover:text-primary";
    };

    return (
        <header
            className={`border-t-4 border-primary fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${isPostDetailPage || isScrolled ? "shadow-md" : "bg-transparent"}`}
        >
            <div className="container flex items-center justify-between">
                <Link href={"/"} className="flex items-center py-4 px-8 bg-primary">
                    <Image
                        src="/logistica.png"
                        width={200}
                        height={200}
                        alt="logistica.logo"
                    />
                </Link>

                <nav className="hidden md:flex ">
                    <ul className="flex space-x-6 font-medium">
                        <li>
                            <Link href="/" className={getLinkClass("/")}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className={getLinkClass("/about-us")}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className={getLinkClass("/services")}>
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link href="/teams" className={getLinkClass("/teams")}>
                                Team
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button
                    className="md:hidden text-white px-10"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="space-y-2">
                        <span className="block w-6 h-1 bg-gray-900"></span>
                        <span className="block w-6 h-1 bg-gray-900"></span>
                        <span className="block w-6 h-1 bg-gray-900"></span>
                    </div>
                </button>
            </div>

            {isMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-[#190808] bg-opacity-50 z-40 flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div
                        className="bg-white p-6 rounded-md w-3/4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="space-y-6 text-center text-lg font-medium">
                            <li>
                                <Link href="/" className={getLinkClass("/")} onClick={handleLinkClick}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className={getLinkClass("/about-us")} onClick={handleLinkClick}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className={getLinkClass("/services")} onClick={handleLinkClick}>
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams" className={getLinkClass("/teams")} onClick={handleLinkClick}>
                                    Teams
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}
