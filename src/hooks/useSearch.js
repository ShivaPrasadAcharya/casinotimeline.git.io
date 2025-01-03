import { useState, useEffect } from 'react';

export const useSearch = (timelineGroups, activeTimeline) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [matchCount, setMatchCount] = useState(0);

  useEffect(() => {
    // Reset match index when search term changes
    setCurrentMatchIndex(1);
    
    // Calculate total matches
    if (searchTerm) {
      const timeline = timelineGroups[activeTimeline];
      let count = 0;
      
      timeline.data.forEach(entry => {
        const entryText = [
          entry.year,
          entry.title.en,
          entry.title.ne,
          entry.description.en,
          entry.description.ne
        ].join(' ').toLowerCase();
        
        if (entryText.includes(searchTerm.toLowerCase())) {
          count++;
        }
      });
      
      setMatchCount(count);
    } else {
      setMatchCount(0);
    }
  }, [searchTerm, activeTimeline, timelineGroups]);

  const nextMatch = () => {
    setCurrentMatchIndex(prev => (prev >= matchCount ? 1 : prev + 1));
  };

  const prevMatch = () => {
    setCurrentMatchIndex(prev => (prev <= 1 ? matchCount : prev - 1));
  };

  return {
    searchTerm,
    setSearchTerm,
    currentMatchIndex,
    setCurrentMatchIndex,
    matchCount,
    nextMatch,
    prevMatch
  };
};

export default useSearch;
