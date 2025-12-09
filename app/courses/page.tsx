"use client";

import { useState } from 'react';
import CourseCard from '@/components/CourseCard';

// Mock Data
const coursesData = [
    // School
    { title: "Class 11 (CBSE/ISC)", description: "Accounts, Economics, BST. Foundation building for future success.", category: "School", iconType: "school" as const },
    { title: "Class 12 (CBSE/ISC)", description: "Board Exam focused preparation with mock tests and revision series.", category: "School", iconType: "school" as const },
    // College
    { title: "B.Com (Hons/Prog)", description: "Calculus, Corporate Accounting, and Financial Management for University exams.", category: "College", iconType: "college" as const },
    { title: "M.Com Entrance", description: "Preparation for top university entrance exams like LU, DU, and BHU.", category: "College", iconType: "college" as const },
    // Pro
    { title: "CA Foundation", description: "Complete coaching for all 4 papers with expert faculty.", category: "Professional", iconType: "pro" as const },
    { title: "CS Executive", description: "Detailed conceptual study for Company Secretary aspirations.", category: "Professional", iconType: "pro" as const },
    { title: "CMA Foundation", description: "Cost & Management Accountant preparation track.", category: "Professional", iconType: "pro" as const },
];

export default function CoursesPage() {
    const [filter, setFilter] = useState('All');

    const filteredCourses = filter === 'All'
        ? coursesData
        : coursesData.filter(course => course.category === filter);

    return (
        <>
            <section className="bg-primary text-white py-16 text-center bg-hero-pattern bg-cover bg-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Courses</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">Comprehensive Programs for every stage of your Commerce Journey</p>
                </div>
            </section>

            <section className="py-20 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4">

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['All', 'School', 'College', 'Professional'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat
                                        ? 'bg-primary text-secondary ring-2 ring-secondary ring-offset-2 ring-offset-gray-50'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course, index) => (
                            <div key={index} className="animate-fadeIn">
                                <CourseCard
                                    title={course.title}
                                    description={course.description}
                                    category={course.category}
                                    iconType={course.iconType}
                                />
                            </div>
                        ))}
                    </div>

                    {filteredCourses.length === 0 && (
                        <p className="text-center text-gray-500">No courses found for this category.</p>
                    )}

                </div>
            </section>
        </>
    );
}
