
import React from 'react';

interface SectionProps {
    title: string;
    Icon?: React.ElementType;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, Icon, children }) => (
    <section className="mb-12">
        <div className="flex items-center mb-6">
            {Icon && <Icon className="w-8 h-8 text-cyan-400 mr-3" />}
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        {children}
    </section>
);

export default Section;
