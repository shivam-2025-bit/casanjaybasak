import React from 'react';
import { ViewState, ProfileData } from '../types';
import { Linkedin, Twitter, Facebook, Lock } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: ViewState) => void;
  profile?: ProfileData;
}

const Footer: React.FC<FooterProps> = ({ setCurrentView, profile }) => {
  const handleLink = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Sanjay Kumar Basak & Co.</h3>
            <p className="text-sm mb-4">
              Providing expert financial guidance, taxation, and auditing services to help businesses and individuals thrive in a complex economy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleLink('home')} className="hover:text-white transition">Home</button></li>
              <li><button onClick={() => handleLink('privacy-policy')} className="hover:text-white transition">Privacy Policy</button></li>
              <li><button onClick={() => handleLink('terms')} className="hover:text-white transition">Terms & Conditions</button></li>
              <li><button onClick={() => handleLink('disclaimer')} className="hover:text-white transition">Disclaimer</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: {profile?.email || 'contact@sanjaybasak.com'}</li>
              <li>Phone: {profile?.phone || '+91 98765 43210'}</li>
              <li>Address: {profile?.address || 'Kolkata, India'}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sanjay Kumar Basak & Co. All rights reserved.</p>
          <a 
            href="#admin" 
            className="flex items-center gap-1 hover:text-gray-300 mt-4 md:mt-0 transition-colors"
          >
            <Lock className="w-3 h-3" /> Admin Login
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;