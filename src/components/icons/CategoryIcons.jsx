import React from 'react';
import { 
  FileText, 
  Building, 
  Eye, 
  Scale, 
  HeartHandshake, 
  Laptop, 
  BarChart, 
  HelpCircle 
} from 'lucide-react';

const CategoryIcon = ({ category }) => {
  const iconClass = "w-5 h-5";
  
  const getIconStyle = () => {
    const styles = {
      complaint: {
        icon: FileText,
        color: 'text-red-500',
        bgColor: 'bg-red-50'
      },
      administration: {
        icon: Building,
        color: 'text-blue-500',
        bgColor: 'bg-blue-50'
      },
      monitoring: {
        icon: Eye,
        color: 'text-purple-500',
        bgColor: 'bg-purple-50'
      },
      governance: {
        icon: Scale,
        color: 'text-green-500',
        bgColor: 'bg-green-50'
      },
      service: {
        icon: HeartHandshake,
        color: 'text-orange-500',
        bgColor: 'bg-orange-50'
      },
      digital: {
        icon: Laptop,
        color: 'text-cyan-500',
        bgColor: 'bg-cyan-50'
      },
      planning: {
        icon: BarChart,
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-50'
      },
      default: {
        icon: HelpCircle,
        color: 'text-gray-500',
        bgColor: 'bg-gray-50'
      }
    };
    
    return styles[category] || styles.default;
  };
  
  const { icon: Icon, color, bgColor } = getIconStyle();
  
  return (
    <div className={`${bgColor} p-1.5 rounded-full`}>
      <Icon className={`${iconClass} ${color} stroke-2`} />
    </div>
  );
};

export default CategoryIcon;
