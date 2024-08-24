import React, { useState } from 'react';
import PerformanceTable from './PerformanceTable';

type ChartType = 'value-eq' | 'short-term' | 'money-market';

const PerformanceDashboard: React.FC = () => {
    const [selectedChartType, setSelectedChartType] = useState<ChartType>('value-eq');
    const [selectedChartType1, setSelectedChartType1] = useState<ChartType>('short-term');
    const [selectedChartType2, setSelectedChartType2] = useState<ChartType>('money-market');


    const handleChartTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChartType(event.target.value as ChartType);
        setSelectedChartType1(event.target.value as ChartType);
        setSelectedChartType2(event.target.value as ChartType);
    };

    return (
        <div className="performance-dashboard">
    <PerformanceTable chartType={selectedChartType} />
    </div>
    );
};

export default PerformanceDashboard;