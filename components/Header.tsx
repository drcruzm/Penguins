
import React from 'react';
import { PenguinIcon } from './Icons';

const Header: React.FC = () => (
    <header className="text-center py-8 mb-8 border-b-2 border-slate-700">
        <div className="inline-block bg-cyan-400/10 p-4 rounded-full mb-4">
            <PenguinIcon className="w-16 h-16 text-cyan-300" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Análisis del Árbol de Decisión
        </h1>
        <p className="mt-2 text-xl text-slate-400">Dataset: Palmer Penguins</p>
    </header>
);

export default Header;
