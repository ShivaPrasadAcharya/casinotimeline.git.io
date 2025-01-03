import React from 'react';
import { Menu } from 'lucide-react';

const MenuTrigger = ({ onMouseEnter }) => {
  return (
    <div 
      className="fixed top-4 left-4 z-50 cursor-pointer"
      onMouseEnter={onMouseEnter}
    >
      <div className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
        <Menu className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
};

export default MenuTrigger;
