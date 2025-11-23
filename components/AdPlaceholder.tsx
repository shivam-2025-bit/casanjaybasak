import React from 'react';

interface AdPlaceholderProps {
  format?: 'horizontal' | 'square' | 'vertical';
  label?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ format = 'horizontal', label = 'Advertisement' }) => {
  // Dimensions based on format
  const classes = {
    horizontal: 'w-full h-24', // Leaderboard
    square: 'w-full max-w-[336px] h-[280px] mx-auto', // Medium Rectangle
    vertical: 'w-full h-64', // Vertical banner
  };

  return (
    <div className={`bg-gray-200 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-gray-500 my-8 ${classes[format]}`}>
      <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
      <span className="text-[10px] mt-1">(Google AdSense Slot)</span>
    </div>
  );
};

export default AdPlaceholder;