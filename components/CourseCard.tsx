import { BookOpen, GraduationCap, Briefcase, Calculator, TrendingUp } from 'lucide-react';

interface CourseCardProps {
    title: string;
    description: string;
    category: string;
    iconType: 'school' | 'college' | 'pro';
}

const CourseCard = ({ title, description, category, iconType }: CourseCardProps) => {

    const getIcon = () => {
        switch (iconType) {
            case 'school': return <BookOpen size={40} className="text-primary mb-4" />;
            case 'college': return <GraduationCap size={40} className="text-primary mb-4" />;
            case 'pro': return <Briefcase size={40} className="text-primary mb-4" />;
            default: return <BookOpen size={40} className="text-primary mb-4" />;
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-secondary transform hover:-translate-y-1">
            <div className="flex justify-center">
                {getIcon()}
            </div>
            <h3 className="text-xl font-heading font-bold text-primary mb-3 text-center">{title}</h3>
            <p className="text-gray-600 text-center text-sm">{description}</p>
            <div className="mt-4 text-center">
                <span className="inline-block bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full uppercase tracking-wider">
                    {category}
                </span>
            </div>
        </div>
    );
};

export default CourseCard;
