// src/components/ui/Badge.js
import React from 'react';

const Badge = ({ variant = 'primary', children, className }) => {
  const baseClasses = "inline-flex items-center px-3 py-1 text-sm font-medium rounded";
  const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-gray-800",
    outline: "border border-gray-300 text-gray-700",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;