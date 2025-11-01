// Fix: Import React to provide the 'React' namespace for types like 'ElementType'.
import React from 'react';

export interface Metric {
    title: string;
    value: string;
    description: string;
    Icon: React.ElementType;
}

export type MetricCardProps = Metric;
