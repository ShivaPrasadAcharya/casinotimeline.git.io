import React from 'react';

const HighlightedText = ({ text, searchTerm, isCurrentMatch }) => {
  if (!searchTerm || !text) return <span>{text}</span>;

  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) => {
        if (part.toLowerCase() === searchTerm.toLowerCase()) {
          return (
            <mark 
              key={i} 
              className={`bg-yellow-200 ${isCurrentMatch ? 'ring-2 ring-blue-500' : ''}`}
            >
              {part}
            </mark>
          );
        }
        return part;
      })}
    </span>
  );
};

export default HighlightedText;
