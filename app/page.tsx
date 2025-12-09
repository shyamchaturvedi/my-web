import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import FacultyCard from "@/components/FacultyCard";
import Link from "next/link";
import { CheckCircle, Award, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Classroom"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Building Future Leaders</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Gaur Commerce Classes has been a beacon of excellence in commerce education since 1987.
                We believe in concept-based learning that goes beyond rote memorization.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><CheckCircle className="text-secondary" /> Experienced Faculty (35+ Years)</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-secondary" /> Personalized Attention</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-secondary" /> Regular Mock Tests & Feedback</li>
              </ul>
              <Link href="/about" className="text-primary font-bold hover:text-secondary border-b-2 border-secondary pb-1 inline-block">
                Read More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12">Our Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <CourseCard
              title="Class 12 (Board Prep)"
              description="Comprehensive coaching for CBSE & ISC boards. Focus on Accounts, Economics, and BST."
              category="School"
              iconType="school"
            />
            <CourseCard
              title="B.Com (Hons)"
              description="University curriculum aligned classes covering Financial Accounting, Costing, and Corporate Law."
              category="College"
              iconType="college"
            />
            <CourseCard
              title="CA Foundation"
              description="Rigorous preparation for Chartered Accountancy entrance with mock series and doubt sessions."
              category="Professional"
              iconType="pro"
            />
          </div>
          <div className="mt-12">
            <Link href="/courses" className="bg-primary text-white px-8 py-3 rounded hover:bg-[#1a3a5a] transition">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats / Facilities */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 bg-white/10 rounded backdrop-blur-sm">
            <Award size={40} className="mx-auto text-secondary mb-2" />
            <h4 className="text-3xl font-bold">35+</h4>
            <p className="text-sm opacity-80">Years Experience</p>
          </div>
          <div className="p-4 bg-white/10 rounded backdrop-blur-sm">
            <div className="mx-auto text-secondary mb-2 text-2xl font-bold">10k+</div>
            <h4 className="text-3xl font-bold">10k+</h4>
            <p className="text-sm opacity-80">Students Mentored</p>
          </div>
          <div className="p-4 bg-white/10 rounded backdrop-blur-sm">
            <BookOpen size={40} className="mx-auto text-secondary mb-2" />
            <h4 className="text-3xl font-bold">100%</h4>
            <p className="text-sm opacity-80">Course Coverage</p>
          </div>
          <div className="p-4 bg-white/10 rounded backdrop-blur-sm">
            <CheckCircle size={40} className="mx-auto text-secondary mb-2" />
            <h4 className="text-3xl font-bold">Top</h4>
            <p className="text-sm opacity-80">City Ranks</p>
          </div>
        </div>
      </section>
    </>
  );
}
