import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative h-[80vh] flex items-center justify-center text-center bg-hero-pattern bg-cover bg-center text-white px-4">
            <div className="max-w-4xl relative z-10">
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">
                    Shape Your <span className="text-secondary">Commerce Career</span> With The Best
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Over 35 years of excellence in coaching for Board Exams, University, and Professional Courses (CA/CS/CMA) in Lucknow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/courses" className="bg-secondary text-primary px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-600 transition shadow-lg transform hover:scale-105">
                        Explore Courses
                    </Link>
                    <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-primary transition shadow-lg">
                        Book Free Demo
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
