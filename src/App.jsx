import React, { useState } from 'react';
import { timelineGroups } from './data/timelineData';
import Timeline from './components/timeline/Timeline';
import Header from './components/header/Header';
import MenuTrigger from './components/layout/MenuTrigger';
import { useSearch } from './hooks/useSearch';

function App() {
  // State management
  const [language, setLanguage] = useState('en');
  const [activeTimeline, setActiveTimeline] = useState(Object.keys(timelineGroups)[0]);
  const [showContent, setShowContent] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  // Search functionality using custom hook
  const {
    searchTerm,
    setSearchTerm,
    currentMatchIndex,
    matchCount,
    nextMatch,
    prevMatch
  } = useSearch(timelineGroups, activeTimeline);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Menu Trigger */}
      <MenuTrigger onMouseEnter={() => setIsHeaderVisible(true)} />

      {/* Header with controls */}
      <Header
        isVisible={isHeaderVisible}
        onMouseLeave={() => setIsHeaderVisible(false)}
        language={language}
        setLanguage={setLanguage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeTimeline={activeTimeline}
        setActiveTimeline={setActiveTimeline}
        showContent={showContent}
        setShowContent={setShowContent}
        timelineGroups={timelineGroups}
        matchCount={matchCount}
        currentMatchIndex={currentMatchIndex}
        prevMatch={prevMatch}
        nextMatch={nextMatch}
      />

      {/* Main content area */}
      <div className="px-4 py-6">
        {Object.values(timelineGroups).map((timeline) => (
          <Timeline
            key={timeline.id}
            timelineData={timeline.data}
            title={timeline.title}
            index={timeline.index}
            language={language}
            isActive={activeTimeline === timeline.id}
            showContent={showContent}
            searchTerm={searchTerm}
            currentMatchIndex={currentMatchIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
