import React from 'react';
import { BlogPost, ProfileData } from '../types';
import { SERVICES } from '../data/content';
import AdPlaceholder from '../components/AdPlaceholder';
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';

interface HomeProps {
  blogs: BlogPost[];
  profile: ProfileData;
  onBlogClick: (id: number) => void;
  onServiceClick: (id: number) => void;
}

const Home: React.FC<HomeProps> = ({ blogs, profile, onBlogClick, onServiceClick }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000" 
            alt="Financial Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Trusted Partner in <br/> <span className="text-accent">Financial Success</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Expert Chartered Accountancy services helping individuals and businesses navigate the complexities of taxation and growth.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-secondary hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* AdSense Slot */}
      <div className="container mx-auto px-4">
        <AdPlaceholder format="horizontal" label="Hero Ad Slot" />
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src={profile.imageUrl} 
              alt={profile.name} 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">About Me</h2>
            <h3 className="text-3xl font-bold text-primary mb-6">{profile.name}</h3>
            <h4 className="text-xl text-gray-600 mb-4">{profile.role}</h4>
            <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
              {profile.bio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2"><CheckCircle className="text-secondary w-5 h-5" /><span className="text-gray-700">Certified Expert</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="text-secondary w-5 h-5" /><span className="text-gray-700">Client Centric</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="text-secondary w-5 h-5" /><span className="text-gray-700">Timely Delivery</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="text-secondary w-5 h-5" /><span className="text-gray-700">Strategic Growth</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Our Services</h2>
            <p className="text-gray-600 mt-4">Comprehensive financial solutions tailored to your needs. Click on a service to start.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                onClick={() => onServiceClick(service.id)}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-secondary group cursor-pointer"
              >
                <div className="mb-6 group-hover:scale-110 transition duration-300 transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 flex items-center text-sm font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details & Request <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Slot - In-feed */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
           <AdPlaceholder format="horizontal" label="Mid-Content Ad Slot" />
        </div>
      </div>

      {/* Blog Preview Section */}
      <section id="blog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary">Financial Insights</h2>
              <p className="text-gray-600 mt-2">Latest updates on Tax, GST, and Business.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition hover:scale-105 duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-semibold text-secondary uppercase mb-2">{blog.category}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{blog.excerpt}</p>
                  <div className="mt-auto">
                    <button 
                      onClick={() => onBlogClick(blog.id)}
                      className="text-primary font-semibold hover:text-secondary transition flex items-center gap-1"
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-400 mb-8">Have questions about your taxes or business finances? Send us a message or visit our office.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg"><Mail className="w-6 h-6 text-secondary" /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-gray-400">{profile.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg"><Phone className="w-6 h-6 text-secondary" /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-gray-400">{profile.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg"><MapPin className="w-6 h-6 text-secondary" /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Visit Us</h4>
                    <p className="text-gray-400 whitespace-pre-line">{profile.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you shortly.'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="john@example.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Tax Consultation" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-primary outline-none" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;