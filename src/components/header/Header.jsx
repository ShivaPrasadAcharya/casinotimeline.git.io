import React from 'react';
import { Globe2, Eye, EyeOff } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SearchInput from '../search/SearchInput';

const Header = ({
  isVisible,
  onMouseLeave,
  language,
  setLanguage,
  searchTerm,
  setSearchTerm,
  activeTimeline,
  setActiveTimeline,
  showContent,
  setShowContent,
  timelineGroups,
  matchCount,
  currentMatchIndex,
  prevMatch,
  nextMatch
}) => {
  return (
    <div 
      className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-40 transition-all duration-300 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform -translate-y-full pointer-events-none'
      }`}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Language and search controls */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={() => setLanguage(prev => prev === 'en' ? 'ne' : 'en')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
            >
              <Globe2 className="w-5 h-5 text-blue-600" />
              <span className="font-medium">
                {language === 'en' ? 'नेपाली' : 'English'}
              </span>
            </button>

            <SearchInput 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              matchCount={matchCount}
              currentMatchIndex={currentMatchIndex}
              prevMatch={prevMatch}
              nextMatch={nextMatch}
            />
          </div>

          {/* Timeline selector */}
          <Select value={activeTimeline} onValueChange={setActiveTimeline}>
            <SelectTrigger className="w-[280px] bg-white">
              <SelectValue placeholder="Select Timeline">
                {timelineGroups[activeTimeline].title[language]}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Object.values(timelineGroups).map((timeline) => (
                <SelectItem key={timeline.id} value={timeline.id}>
                  {timeline.title[language]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Content visibility toggle */}
          <button
            onClick={() => setShowContent(prev => !prev)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
          >
            {showContent ? (
              <>
                <EyeOff className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Hide Content</span>
              </>
            ) : (
              <>
                <Eye className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Show Content</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
