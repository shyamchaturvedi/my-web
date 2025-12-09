"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: '',
        message: ''
    });
    const [status, setStatus] = useState<null | 'success' | 'error'>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(null);
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', course: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <section className="bg-primary text-white py-16 text-center bg-hero-pattern bg-cover bg-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get In Touch</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">Visit us at our branches or send us a message</p>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg overflow-hidden">

                        {/* Contact Info */}
                        <div className="bg-primary text-white p-10 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-6 text-secondary">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-secondary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold">Head Office</h4>
                                        <p className="opacity-80">Sector F, Kapoorthala, Aliganj, Lucknow, Uttar Pradesh 226024</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="text-secondary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold">Phone</h4>
                                        <p className="opacity-80">+91 9450022814</p>
                                        <p className="opacity-80">+91 9415402650</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="text-secondary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold">Email</h4>
                                        <p className="opacity-80">info@gaurclasses.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-10">
                            <h3 className="text-2xl font-bold text-primary mb-6">Send A Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        pattern="[0-9]{10}"
                                        title="Please enter a valid 10-digit number"
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Course Interest</label>
                                    <select
                                        name="course"
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                                        value={formData.course}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Course</option>
                                        <option value="Class 11">Class 11</option>
                                        <option value="Class 12">Class 12</option>
                                        <option value="B.Com">B.Com</option>
                                        <option value="CA/CS">CA/CS/CMA</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-secondary text-primary font-bold py-3 rounded hover:bg-yellow-600 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>

                                {status === 'success' && (
                                    <p className="text-green-600 font-bold text-center mt-2">Message sent successfully!</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-600 font-bold text-center mt-2">Something went wrong. Try again.</p>
                                )}
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
