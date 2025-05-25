import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight">
              <span className="font-extrabold">Goal</span>
              <span className="font-black">Gallery</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-normal">.com</span>
            </h1>
          </div>
          
          {/* Menu Icon */}
          <div className="flex-shrink-0">
            <button 
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Open menu"
            >
              <Menu 
                size={24} 
                className="text-black sm:w-7 sm:h-7 lg:w-8 lg:h-8" 
                strokeWidth={2.5}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}