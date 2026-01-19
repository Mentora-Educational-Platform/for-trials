import { Search, Menu } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'careers', sectionId?: string) => void;
  currentPage: 'home' | 'careers';
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group select-none" 
            onClick={() => onNavigate('home')}
          >
            <span className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors">Mentozy</span>
            <div className="w-2 h-2 bg-amber-500 rounded-sm group-hover:rotate-45 transition-transform duration-300"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('home')} 
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('home', 'features')} 
              className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => onNavigate('home', 'learning-tracks')} 
              className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors"
            >
              Tracks
            </button>
            <button 
              onClick={() => onNavigate('home', 'pricing')} 
              className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => onNavigate('careers')} 
              className={`text-sm font-medium transition-colors ${currentPage === 'careers' ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
            >
              Careers
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center justify-center p-2.5 hover:bg-amber-50 text-gray-600 hover:text-amber-600 rounded-xl transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Mobile Menu Button (Simplified for now) */}
            <button className="md:hidden p-2.5 hover:bg-gray-100 rounded-xl transition-colors text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
            
            <button 
                onClick={() => onNavigate('home', 'pricing')}
                className="hidden md:block px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
            >
                Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}