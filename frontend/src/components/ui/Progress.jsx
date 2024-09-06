// src/components/ui/Progress.js
import React from 'react';

const Progress = ({ value, className }) => {
  return (
    <div className={`relative w-full h-2 bg-gray-200 rounded ${className}`}>
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default Progress;
