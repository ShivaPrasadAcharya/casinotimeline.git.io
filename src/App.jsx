import React, { useState, useRef, useEffect } from 'react';

// Lucide Icons
import { 
  Globe2, 
  Info, 
  Languages, 
  ChevronDown, 
  Download, 
  Eye, 
  EyeOff,
  FileText,
  Building,
  Scale,
  HeartHandshake,
  Laptop,
  BarChart,
  HelpCircle,
  ChevronRight,
  ListFilter,
  Menu
} from 'lucide-react';

// UI Components from shadcn/ui
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Custom Components - Timeline
import Timeline from './components/timeline/Timeline';
import TimelineEntry from './components/timeline/TimelineEntry';
import IndexSection from './components/timeline/IndexSection';

// Custom Components - Layout & Header
import Header from './components/header/Header';
import MenuTrigger from './components/layout/MenuTrigger';

// Custom Components - Text & Search
import CategoryIcon from './components/icons/CategoryIcon';
import HighlightedText from './components/text/HighlightedText';
import SearchInput from './components/search/SearchInput';

// Custom Hooks
import { useSearch } from './hooks/useSearch';

// Data
import { timelineGroups } from './data/timelineData';

// External Libraries
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
