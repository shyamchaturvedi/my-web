import { User } from 'lucide-react';

interface FacultyCardProps {
    name: string;
    designation: string;
    subject: string;
}

const FacultyCard = ({ name, designation, subject }: FacultyCardProps) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-sm text-center border-b-4 border-primary">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center border-4 border-secondary text-primary">
                <User size={40} />
            </div>
            <h3 className="text-lg font-heading font-bold text-primary mb-1">{name}</h3>
            <p className="text-secondary font-semibold text-sm mb-2">{designation}</p>
            <p className="text-gray-500 italic text-sm">{subject}</p>
        </div>
    );
};

export default FacultyCard;
