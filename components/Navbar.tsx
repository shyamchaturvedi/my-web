"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 text-2xl font-heading font-bold text-secondary">
                    <div className="relative h-10 w-10">
                        <Image src="/images/logo.png" alt="GCC Logo" fill className="object-contain" />
                    </div>
                    <span>Gaur Commerce Classes</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className="hover:text-secondary transition font-medium">Home</Link>
                    <Link href="/about" className="hover:text-secondary transition font-medium">About Us</Link>
                    <Link href="/courses" className="hover:text-secondary transition font-medium">Courses</Link>
                    <Link href="/faculty" className="hover:text-secondary transition font-medium">Faculty</Link>
                    <Link href="/contact" className="hover:text-secondary transition font-medium">Contact</Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link href="/contact" className="bg-secondary text-primary px-4 py-2 rounded font-bold hover:bg-yellow-600 transition">
                        Enroll Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <nav className="md:hidden bg-primary border-t border-gray-700">
                    <ul className="flex flex-col p-4 space-y-4 text-center">
                        <li><Link href="/" className="block hover:text-secondary" onClick={toggleMenu}>Home</Link></li>
                        <li><Link href="/about" className="block hover:text-secondary" onClick={toggleMenu}>About Us</Link></li>
                        <li><Link href="/courses" className="block hover:text-secondary" onClick={toggleMenu}>Courses</Link></li>
                        <li><Link href="/faculty" className="block hover:text-secondary" onClick={toggleMenu}>Faculty</Link></li>
                        <li><Link href="/contact" className="block hover:text-secondary" onClick={toggleMenu}>Contact</Link></li>
                        <li>
                            <Link href="/contact" className="inline-block bg-secondary text-primary px-6 py-2 rounded font-bold" onClick={toggleMenu}>
                                Enroll Now
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
