import { Target, Eye } from 'lucide-react';

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-primary text-white py-16 text-center bg-hero-pattern bg-cover bg-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Our Institute</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">A Legacy of Excellence Since 1987 in Commerce Education.</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Journey</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p className="mb-6">
                                Gaur Commerce Classes (Gaurs The Commerce House) was established in <strong>1987</strong> by the visionary educator <strong>Shri Sharad Gaur</strong>.
                                What started as a humble initiative to provide quality education to commerce students in Lucknow has now grown into the city&apos;s most trusted name for commerce coaching.
                            </p>
                            <p>
                                Over the decades, we have mentored thousands of students, helping them achieve top ranks in Board Exams (CBSE & ISC), University Exams (B.Com & M.Com),
                                and Professional Exams (CA, CS, CMA). Our alumni are placed in top MNCs and reputable firms across the globe.
                            </p>
                        </div>

                        {/* Mission / Vision Cards */}
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-secondary shadow-sm">
                                <Target size={40} className="text-primary mb-4" />
                                <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
                                <p className="text-gray-600">To provide conceptual clarity and build a strong foundation for commerce students, empowering them to excel in their academic and professional careers.</p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-secondary shadow-sm">
                                <Eye size={40} className="text-primary mb-4" />
                                <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
                                <p className="text-gray-600">To be the premier institute for commerce education in India, known for innovation, integrity, and student success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Message */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
                        <div className="md:w-1/3 h-64 md:h-auto relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1"
                                alt="Founder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-2/3 p-10 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold text-primary mb-6">From the Founder&apos;s Desk</h2>
                            <blockquote className="text-lg text-gray-600 italic border-l-4 border-secondary pl-4 mb-6">
                                &quot;Education is not just about learning facts, but about training the mind to think. At Gaur Commerce Classes, we don&apos;t just teach commerce; we nurture future leaders of the corporate world. Hard work, discipline, and conceptual understanding are the pillars of our success.&quot;
                            </blockquote>
                            <cite className="font-bold text-primary not-italic">- Shri Sharad Gaur, Founder & Director</cite>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
