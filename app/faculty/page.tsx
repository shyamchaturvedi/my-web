import FacultyCard from '@/components/FacultyCard';

export default function FacultyPage() {
    const facultyMembers = [
        { name: "Shri Sharad Gaur", designation: "Founder & Director", subject: "Senior Mentor (35+ Yrs Exp)" },
        { name: "Mr. R.K. Gupta", designation: "Senior Accounts Faculty", subject: "Accountancy" },
        { name: "Ms. Anjali Verma", designation: "Economics Expert", subject: "Micro & Macro Economics" },
        { name: "Mr. V. Singh", designation: "Business Studies Head", subject: "Business Studies & Management" },
        { name: "CA Rohit Sharma", designation: "CA Foundation Mentor", subject: "Specialized Accounting" },
        { name: "CS Priya Singh", designation: "Law Faculty", subject: "Corporate & Commercial Law" },
    ];

    return (
        <>
            <section className="bg-primary text-white py-16 text-center bg-hero-pattern bg-cover bg-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Meet Our Mentors</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">The Experienced Team Behind Your Success</p>
                </div>
            </section>

            <section className="py-20 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facultyMembers.map((member, index) => (
                            <FacultyCard
                                key={index}
                                name={member.name}
                                designation={member.designation}
                                subject={member.subject}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
