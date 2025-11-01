
import React from 'react';
import type { MetricCardProps } from '../types';

const MetricCard: React.FC<MetricCardProps> = ({ title, value, description, Icon }) => {
    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{title}</p>
                    <p className="text-4xl font-bold text-white mt-1">{value}</p>
                </div>
                <div className="bg-slate-700 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-cyan-300" />
                </div>
            </div>
            <p className="text-slate-400 mt-4 text-sm">{description}</p>
        </div>
    );
};

export default MetricCard;
