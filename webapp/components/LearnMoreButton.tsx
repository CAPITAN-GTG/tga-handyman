import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FC } from 'react';

interface LearnMoreButtonProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const LearnMoreButton: FC<LearnMoreButtonProps> = ({ variant = 'dark', className = '' }) => {
  return (
    <Link
      href="/pages/about-us"
      className={`
        inline-flex items-center px-8 py-3 text-sm font-semibold rounded-md shadow-sm
        transition-all duration-300
        ${variant === 'dark' 
          ? 'bg-cyan-600 text-white hover:bg-cyan-500 focus-visible:outline-cyan-600' 
          : 'bg-white text-gray-900 hover:bg-gray-100 focus-visible:outline-white'
        }
        focus-visible:outline focus-visible:outline-offset-2
        ${className}
      `}
    >
      Learn More
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
};

export default LearnMoreButton; 