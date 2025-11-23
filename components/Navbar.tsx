import React, { useState } from 'react';
import { Menu, X, Briefcase, LayoutDashboard } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  setCurrentView: (view: ViewState) => void;
  scrollToSection: (id: string) => void;
  isAuthenticated?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentView, scrollToSection, isAuthenticated = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => handleNav(() => { setCurrentView('home'); window.scrollTo(0,0); })}
          >
            <div className="bg-white p-2 rounded-full">
              <Briefcase className="text-primary w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">Sanjay Kumar Basak & Co.</span>
              <span className="text-xs text-gray-300 uppercase tracking-wide">Chartered Accountants</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium items-center">
            <button onClick={() => handleNav(() => { setCurrentView('home'); window.scrollTo(0,0); })} className="hover:text-accent transition">Home</button>
            <button onClick={() => handleNav(() => { setCurrentView('home'); setTimeout(() => scrollToSection('about'), 100); })} className="hover:text-accent transition">About</button>
            <button onClick={() => handleNav(() => { setCurrentView('home'); setTimeout(() => scrollToSection('services'), 100); })} className="hover:text-accent transition">Services</button>
            <button onClick={() => handleNav(() => { setCurrentView('home'); setTimeout(() => scrollToSection('blog'), 100); })} className="hover:text-accent transition">Blog</button>
            <button onClick={() => handleNav(() => { setCurrentView('home'); setTimeout(() => scrollToSection('contact'), 100); })} className="hover:text-accent transition">Contact</button>
            
            {isAuthenticated && (
              <button 
                onClick={() => handleNav(() => setCurrentView('admin-dashboard'))}
                className="flex items-center gap-1 bg-accent hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-bold transition-colors text-sm"
              >
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 border-t border-blue-800">
          <div className="flex flex-col p-4 space-y-4">
            <button onClick={() => handleNav(() => { setCurrentView('home'); window.scrollTo(0,0); })} className="text-left">Home</button>
            <button onClick={() => handleNav(() => { setCurrentView('home'); setTimeout(() => scrollToSection('about'), 100); })} className="text-left">About</button>
            <button onClick={() => handleNav(() => { setCurrentView('home'); setTimeout(() => scrollToSection('services'), 100); })} className="text-left">Services</button>
            <button onClick={() => handleNav(() => { setCurrentView('home'); setTimeout(() => scrollToSection('blog'), 100); })} className="text-left">Blog</button>
            <button onClick={() => handleNav(() => { setCurrentView('home'); setTimeout(() => scrollToSection('contact'), 100); })} className="text-left">Contact</button>
            {isAuthenticated && (
              <button 
                onClick={() => handleNav(() => setCurrentView('admin-dashboard'))}
                className="text-left text-accent font-bold flex items-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4" /> Admin Dashboard
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;