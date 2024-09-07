// ui/select.js

import React from 'react';

const Select = ({ children, onValueChange }) => {
  const handleChange = (e) => {
    onValueChange(e.target.value);
  };

  return (
    <select onChange={handleChange} className="border border-gray-300 rounded-md p-2">
      {children}
    </select>
  );
};

const SelectTrigger = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const SelectContent = ({ children }) => {
  return <div>{children}</div>;
};

const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

const SelectValue = ({ placeholder }) => {
  return <option value="" disabled selected>{placeholder}</option>;
};

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
