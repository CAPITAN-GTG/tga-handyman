import React from 'react';
import { X } from 'lucide-react';

interface ServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  services: string[];
  icon: React.ElementType;
}

const ServicePopup: React.FC<ServicePopupProps> = ({ isOpen, onClose, title, services, icon: Icon }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 transition-opacity duration-300 ease-in-out bg-black/80" 
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal */}
        <div 
          className="relative w-full max-w-lg transform overflow-hidden bg-white shadow-xl transition-all duration-300 ease-in-out"
          style={{
            animation: 'modalIn 0.3s ease-out forwards'
          }}
        >
          {/* Close button */}
          <button
            type="button"
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <X className="h-6 w-6" />
          </button>

          {/* Header */}
          <div className="bg-black px-6 py-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-green-500">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-medium text-white">
                {title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-green-50 transition-colors duration-200 group cursor-pointer"
                >
                  <div className="w-1.5 h-1.5 bg-green-500 group-hover:scale-150 transition-transform duration-200" />
                  <span className="text-gray-700 group-hover:text-gray-900">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ServicePopup; 