import React, { ReactNode } from 'react';

interface ChartCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="px-6 py-4 bg-blue-900 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default ChartCard;