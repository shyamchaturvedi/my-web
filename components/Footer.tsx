import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0b1d30] text-gray-300 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* About */}
                <div>
                    <h3 className="text-secondary font-heading text-xl font-bold mb-4">Gaur Commerce Classes</h3>
                    <p className="text-sm leading-relaxed">
                        The premier destination for 11th, 12th, B.Com, M.Com, CA, CS, & CMA preparation in Lucknow.
                        Expert guidance by Shri Sharad Gaur since 1987.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-secondary font-heading text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="hover:text-secondary transition">About Us</Link></li>
                        <li><Link href="/courses" className="hover:text-secondary transition">Our Courses</Link></li>
                        <li><Link href="/faculty" className="hover:text-secondary transition">Faculty</Link></li>
                        <li><Link href="/contact" className="hover:text-secondary transition">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-secondary font-heading text-xl font-bold mb-4">Contact Us</h3>
                    <div className="flex flex-col space-y-2 items-center md:items-start">
                        <p className="flex items-center gap-2"><MapPin size={18} className="text-secondary" /> Lucknow, Uttar Pradesh</p>
                        <p className="flex items-center gap-2"><Phone size={18} className="text-secondary" /> (+91) 9450022814</p>
                        <p className="flex items-center gap-2"><Mail size={18} className="text-secondary" /> info@gaurclasses.com</p>
                    </div>

                    <div className="flex space-x-4 mt-6 justify-center md:justify-start">
                        <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition"><Facebook size={20} /></Link>
                        <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition"><Twitter size={20} /></Link>
                        <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition"><Instagram size={20} /></Link>
                        <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition"><Linkedin size={20} /></Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Gaur Commerce Classes. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
