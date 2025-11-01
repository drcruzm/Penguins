
import React from 'react';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import Section from './components/Section';
import { 
    ChartBarIcon, 
    CheckCircleIcon, 
    ScaleIcon, 
    CursorArrowRaysIcon, 
    DocumentChartBarIcon, 
    AcademicCapIcon, 
    LightBulbIcon, 
    BeakerIcon 
} from './components/Icons';
import type { Metric } from './types';

const App: React.FC = () => {
    const metrics: Metric[] = [
        { title: "AUC", value: "0.981", description: "Excelente capacidad discriminativa", Icon: ChartBarIcon },
        { title: "CA", value: "0.931", description: "93.1% de precisión en clasificación", Icon: CheckCircleIcon },
        { title: "F1 Score", value: "0.929", description: "Balance ideal entre precisión y recall", Icon: ScaleIcon },
        { title: "Precision", value: "0.931", description: "Bajo nivel de falsos positivos", Icon: CursorArrowRaysIcon },
        { title: "Recall", value: "0.931", description: "Alta sensibilidad del modelo", Icon: DocumentChartBarIcon },
        { title: "MCC", value: "0.891", description: "Correlación fuerte entre predicciones y realidad", Icon: BeakerIcon },
    ];

    const recommendations = [
        "Analizar la Matriz de Confusión: Revisa qué especies específicas se confunden entre sí.",
        "Inspeccionar el Árbol: Visualiza el árbol para entender las características más importantes.",
        "Validación con Test Set: Evalúa en un conjunto de datos separado para confirmar la generalización.",
        "Análisis de Características: Usa 'Feature Importance' para identificar las variables más relevantes.",
        "Comparación de Modelos: Prueba otros algoritmos (Random Forest, SVM) para comparar rendimiento."
    ];

    return (
        <div className="min-h-screen bg-slate-900 p-4 sm:p-6 lg:p-8">
            <div className="max-w-5xl mx-auto">
                <Header />

                <main>
                    <Section title="Métricas de Rendimiento" >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {metrics.map(metric => (
                                <MetricCard key={metric.title} {...metric} />
                            ))}
                        </div>
                    </Section>

                    <Section title="Interpretación General">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                                <h3 className="text-xl font-bold text-cyan-300 mb-4">Fortalezas del Modelo</h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" /> Alta Precisión General (93.1%).</li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" /> Métricas Balanceadas (Precision, Recall, F1).</li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" /> Excelente Discriminación (AUC de 0.981).</li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" /> Validación Robusta (Cross-validation estratificada).</li>
                                </ul>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                                <h3 className="text-xl font-bold text-cyan-300 mb-4">Contexto: Palmer Penguins</h3>
                                <p className="text-slate-400 mb-4">
                                    Este dataset incluye tres especies (Adelie, Chinstrap, Gentoo) con características como longitud del pico, longitud de la aleta y masa corporal.
                                </p>
                                <p className="text-slate-300 font-medium">
                                    El alto rendimiento sugiere que estas características son <span className="text-teal-300">muy discriminativas</span> para clasificar las especies.
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Recomendaciones" Icon={LightBulbIcon}>
                        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                            <ol className="space-y-4">
                                {recommendations.map((rec, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="flex-shrink-0 mr-4 h-8 w-8 rounded-full bg-cyan-900/50 text-cyan-300 flex items-center justify-center font-bold">{index + 1}</span>
                                        <span className="text-slate-300 mt-1">{rec}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </Section>

                    <Section title="Conclusión" Icon={AcademicCapIcon}>
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-lg shadow-lg">
                            <div className="bg-slate-800 p-6 rounded-md">
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    Tu árbol de decisión está <span className="font-bold text-white">funcionando excepcionalmente bien</span> en el dataset de Palmer Penguins. Con más del 93% de precisión y métricas balanceadas, el modelo es confiable para clasificar las especies. Esto demuestra que las características físicas de los pingüinos son altamente predictivas, y el modelo ha capturado estos patrones efectivamente.
                                </p>
                            </div>
                        </div>
                    </Section>
                </main>
                
                <footer className="text-center mt-12 mb-4">
                    <p className="text-slate-500 text-sm">Análisis generado a partir de resultados de Orange Data Mining.</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
