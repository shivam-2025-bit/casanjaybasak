import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import ServiceDetail from './pages/ServiceDetail';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import { PrivacyPolicy, Disclaimer, TermsConditions } from './pages/Legal';
import { ViewState, BlogPost, ProfileData, Service } from './types';
import { BLOG_POSTS, SERVICES } from './data/content';

const DEFAULT_PROFILE: ProfileData = {
  name: "Sanjay Kumar Basak",
  role: "Chartered Accountant & Business Advisor",
  bio: "With over 15 years of experience in the financial sector, I am dedicated to providing comprehensive solutions in Taxation, Auditing, GST, and Business Advisory. My firm is committed to helping clients navigate complex financial landscapes with clarity and confidence. We believe in integrity, precision, and proactive planning.",
  imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  email: "contact@sanjaybasak.com",
  phone: "+91 98765 43210",
  address: "123 Finance Avenue, Sector 5, Kolkata, West Bengal, 700091",
  bankName: "HDFC Bank",
  accountName: "Sanjay Kumar Basak & Co.",
  accountNumber: "50200012345678",
  ifscCode: "HDFC0001234",
  upiId: "sanjay.ca@okhdfcbank",
  qrCodeUrl: ""
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  
  // Auth state with persistence
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('skb_auth') === 'true';
  });
  
  // Initialize blogs from localStorage or default content
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const savedBlogs = localStorage.getItem('skb_blogs');
    return savedBlogs ? JSON.parse(savedBlogs) : BLOG_POSTS;
  });

  // Initialize Profile from localStorage or default
  const [profile, setProfile] = useState<ProfileData>(() => {
    const savedProfile = localStorage.getItem('skb_profile');
    return savedProfile ? JSON.parse(savedProfile) : DEFAULT_PROFILE;
  });

  // Handle URL Hash for direct linking (e.g., #admin)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#admin') {
        if (isAuthenticated) {
          setCurrentView('admin-dashboard');
        } else {
          setCurrentView('login');
        }
      } else if (currentView === 'login' || currentView === 'admin-dashboard') {
        // If hash is cleared but we are on admin pages, go home
        if (!hash) {
          setCurrentView('home');
        }
      }
    };

    // Check on initial load
    handleHashChange();

    // Listen for changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isAuthenticated, currentView]);

  // Persist data when changed
  useEffect(() => {
    localStorage.setItem('skb_blogs', JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem('skb_profile', JSON.stringify(profile));
  }, [profile]);

  // Function to scroll to specific section on Home page
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBlogClick = (id: number) => {
    setSelectedBlogId(id);
    setCurrentView('blog-detail');
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (id: number) => {
    setSelectedServiceId(id);
    setCurrentView('service-detail');
    window.scrollTo(0, 0);
  };

  const handleLogin = (status: boolean) => {
    if (status) {
      setIsAuthenticated(true);
      localStorage.setItem('skb_auth', 'true');
      setCurrentView('admin-dashboard');
      window.location.hash = 'admin';
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('skb_auth');
    setCurrentView('home');
    history.pushState("", document.title, window.location.pathname + window.location.search);
  };

  const handleAddBlog = (newBlog: BlogPost) => {
    setBlogs([newBlog, ...blogs]);
    alert('Post published successfully!');
  };

  const handleEditBlog = (updatedBlog: BlogPost) => {
    setBlogs(blogs.map(b => b.id === updatedBlog.id ? updatedBlog : b));
    alert('Post updated successfully!');
  };

  const handleDeleteBlog = (id: number) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleUpdateProfile = (updatedProfile: ProfileData) => {
    setProfile(updatedProfile);
    alert('Profile updated successfully!');
  };

  // Views that don't use the standard layout (Navbar/Footer)
  if (currentView === 'login') {
    return (
      <Login 
        onLogin={handleLogin} 
        onBack={() => { 
          setCurrentView('home'); 
          history.pushState("", document.title, window.location.pathname + window.location.search); 
        }} 
      />
    );
  }

  if (currentView === 'admin-dashboard') {
    if (!isAuthenticated) {
      setCurrentView('login');
      return null;
    }
    return (
      <AdminDashboard 
        blogs={blogs} 
        profile={profile}
        onAddBlog={handleAddBlog} 
        onEditBlog={handleEditBlog}
        onDeleteBlog={handleDeleteBlog} 
        onUpdateProfile={handleUpdateProfile}
        onLogout={handleLogout} 
      />
    );
  }

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home blogs={blogs} profile={profile} onBlogClick={handleBlogClick} onServiceClick={handleServiceClick} />;
      case 'blog-detail':
        const post = blogs.find(p => p.id === selectedBlogId);
        return post ? (
          <BlogDetail 
            post={post} 
            onBack={() => { setCurrentView('home'); window.scrollTo(0, 0); }} 
          />
        ) : (
          <div className="p-12 text-center">Blog post not found</div>
        );
      case 'service-detail':
        const service = SERVICES.find(s => s.id === selectedServiceId);
        return service ? (
          <ServiceDetail
            service={service}
            profile={profile}
            onBack={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
          />
        ) : (
          <div className="p-12 text-center">Service not found</div>
        );
      case 'privacy-policy':
        return <PrivacyPolicy />;
      case 'disclaimer':
        return <Disclaimer />;
      case 'terms':
        return <TermsConditions />;
      default:
        return <Home blogs={blogs} profile={profile} onBlogClick={handleBlogClick} onServiceClick={handleServiceClick} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar 
        setCurrentView={setCurrentView} 
        scrollToSection={scrollToSection} 
        isAuthenticated={isAuthenticated}
      />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer setCurrentView={setCurrentView} profile={profile} />
    </div>
  );
};

export default App;