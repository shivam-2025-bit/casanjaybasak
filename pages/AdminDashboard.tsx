import React, { useState, useEffect } from 'react';
import { BlogPost, ProfileData } from '../types';
import { PlusCircle, Trash2, LogOut, LayoutList, User, Edit, Save, CreditCard, Phone, MapPin, Mail } from 'lucide-react';

interface AdminDashboardProps {
  blogs: BlogPost[];
  profile: ProfileData;
  onAddBlog: (blog: BlogPost) => void;
  onEditBlog: (blog: BlogPost) => void;
  onDeleteBlog: (id: number) => void;
  onUpdateProfile: (profile: ProfileData) => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  blogs, 
  profile,
  onAddBlog, 
  onEditBlog,
  onDeleteBlog, 
  onUpdateProfile,
  onLogout 
}) => {
  const [activeTab, setActiveTab] = useState<'posts' | 'profile'>('posts');
  const [view, setView] = useState<'list' | 'form'>('list');
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Blog Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('https://picsum.photos/seed/finance/800/450');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');

  // Profile Form State
  const [profileName, setProfileName] = useState(profile.name);
  const [profileRole, setProfileRole] = useState(profile.role);
  const [profileBio, setProfileBio] = useState(profile.bio);
  const [profileImage, setProfileImage] = useState(profile.imageUrl);
  
  // Contact Info State
  const [email, setEmail] = useState(profile.email || '');
  const [phone, setPhone] = useState(profile.phone || '');
  const [address, setAddress] = useState(profile.address || '');

  // Payment Info State
  const [bankName, setBankName] = useState(profile.bankName || '');
  const [accountName, setAccountName] = useState(profile.accountName || '');
  const [accountNumber, setAccountNumber] = useState(profile.accountNumber || '');
  const [ifscCode, setIfscCode] = useState(profile.ifscCode || '');
  const [upiId, setUpiId] = useState(profile.upiId || '');
  const [qrCodeUrl, setQrCodeUrl] = useState(profile.qrCodeUrl || '');

  const handleResetForm = () => {
    setTitle('');
    setCategory('');
    setImage('https://picsum.photos/seed/finance/800/450');
    setExcerpt('');
    setContent('');
    setEditingId(null);
  };

  const startEdit = (blog: BlogPost) => {
    setTitle(blog.title);
    setCategory(blog.category);
    setImage(blog.image);
    setExcerpt(blog.excerpt);
    setContent(blog.content);
    setEditingId(blog.id);
    setView('form');
  };

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing
      const updatedBlog: BlogPost = {
        id: editingId,
        title,
        category,
        image,
        excerpt,
        content,
        date: blogs.find(b => b.id === editingId)?.date || new Date().toLocaleDateString()
      };
      onEditBlog(updatedBlog);
    } else {
      // Create new
      const newBlog: BlogPost = {
        id: Date.now(),
        title,
        category,
        image,
        excerpt,
        content,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      };
      onAddBlog(newBlog);
    }
    
    handleResetForm();
    setView('list');
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      name: profileName,
      role: profileRole,
      bio: profileBio,
      imageUrl: profileImage,
      email,
      phone,
      address,
      bankName,
      accountName,
      accountNumber,
      ifscCode,
      upiId,
      qrCodeUrl
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">CMS Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, Admin</span>
            <button 
              onClick={onLogout}
              className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm font-medium"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
              <button 
                onClick={() => { setActiveTab('posts'); setView('list'); }}
                className={`w-full flex items-center gap-2 px-4 py-3 text-left border-b border-gray-100 transition ${activeTab === 'posts' ? 'bg-blue-50 text-primary font-semibold' : 'hover:bg-gray-50'}`}
              >
                <LayoutList className="w-5 h-5" /> Manage Posts
              </button>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-2 px-4 py-3 text-left transition ${activeTab === 'profile' ? 'bg-blue-50 text-primary font-semibold' : 'hover:bg-gray-50'}`}
              >
                <User className="w-5 h-5" /> Profile Settings
              </button>
            </div>

            {activeTab === 'posts' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                 <button 
                  onClick={() => { handleResetForm(); setView('form'); }}
                  className={`w-full flex items-center gap-2 px-4 py-3 text-left transition ${view === 'form' && !editingId ? 'bg-blue-50 text-primary font-semibold' : 'hover:bg-gray-50'}`}
                >
                  <PlusCircle className="w-5 h-5" /> Add New Post
                </button>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {activeTab === 'posts' && view === 'list' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-bold text-gray-800">All Blog Posts</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50 uppercase font-semibold text-gray-700">
                      <tr>
                        <th className="px-6 py-3">Title</th>
                        <th className="px-6 py-3">Category</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {blogs.map((blog) => (
                        <tr key={blog.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">{blog.title}</td>
                          <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">{blog.category}</span></td>
                          <td className="px-6 py-4">{blog.date}</td>
                          <td className="px-6 py-4 text-right">
                             <div className="flex justify-end gap-2">
                              <button 
                                onClick={() => startEdit(blog)}
                                className="text-blue-500 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50"
                                title="Edit Post"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => {
                                  if(window.confirm('Are you sure you want to delete this post?')) {
                                    onDeleteBlog(blog.id);
                                  }
                                }}
                                className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                                title="Delete Post"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {blogs.length === 0 && (
                    <div className="p-8 text-center text-gray-500">No posts found. Create one!</div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'posts' && view === 'form' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-6">{editingId ? 'Edit Post' : 'Create New Post'}</h2>
                <form onSubmit={handleBlogSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Post Title</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="e.g. Guide to GST Filing"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <select 
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="Taxation">Taxation</option>
                        <option value="GST">GST</option>
                        <option value="Business">Business</option>
                        <option value="Audit">Audit</option>
                        <option value="Finance">Finance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
                    <input 
                      type="url" 
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none"
                      value={image}
                      onChange={e => setImage(e.target.value)}
                      placeholder="https://..."
                    />
                    <p className="text-xs text-gray-500 mt-1">Use a public image URL (e.g., from Unsplash or your own hosting).</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (Short Summary)</label>
                    <textarea 
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none h-20"
                      value={excerpt}
                      onChange={e => setExcerpt(e.target.value)}
                      placeholder="A brief description that appears on the home page card..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Content (HTML Supported)</label>
                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded mb-2 text-xs text-yellow-800">
                      Tip: You can use simple HTML tags like <code>&lt;p&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;ul&gt;</code>, and <code>&lt;li&gt;</code> for formatting.
                    </div>
                    <textarea 
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none h-64 font-mono text-sm"
                      value={content}
                      onChange={e => setContent(e.target.value)}
                      placeholder="<p>Write your article content here...</p>"
                    />
                  </div>

                  <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                    <button 
                      type="button" 
                      onClick={() => { setView('list'); handleResetForm(); }}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="px-6 py-2 bg-primary text-white rounded hover:bg-blue-800 font-medium shadow-sm flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" /> {editingId ? 'Update Post' : 'Publish Post'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow p-6 max-w-4xl">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                   <User className="w-6 h-6 text-primary" />
                   <h2 className="text-xl font-bold text-gray-800">Profile & Settings</h2>
                </div>
                
                <form onSubmit={handleProfileSubmit} className="space-y-8">
                  
                  {/* Personal Details */}
                  <section>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4 border-l-4 border-primary pl-3">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" required className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none" value={profileName} onChange={e => setProfileName(e.target.value)} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Professional Role</label>
                        <input type="text" required className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none" value={profileRole} onChange={e => setProfileRole(e.target.value)} />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio / About Description</label>
                        <textarea required className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none h-24" value={profileBio} onChange={e => setProfileBio(e.target.value)} />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image URL</label>
                        <input type="url" required className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none" value={profileImage} onChange={e => setProfileImage(e.target.value)} />
                         {profileImage && <img src={profileImage} alt="Preview" className="mt-2 w-16 h-20 object-cover rounded shadow border" />}
                      </div>
                    </div>
                  </section>

                  {/* Contact Details */}
                  <section>
                     <h3 className="text-lg font-semibold text-gray-700 mb-4 border-l-4 border-secondary pl-3 flex items-center gap-2">
                        Contact Details
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><Mail className="w-3 h-3"/> Public Email</label>
                          <input type="email" required className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><Phone className="w-3 h-3"/> Phone Number</label>
                          <input type="text" required className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none" value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><MapPin className="w-3 h-3"/> Office Address</label>
                          <textarea required className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none h-16" value={address} onChange={e => setAddress(e.target.value)} />
                        </div>
                     </div>
                  </section>

                  {/* Payment Details */}
                  <section>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4 border-l-4 border-accent pl-3 flex items-center gap-2">
                       <CreditCard className="w-5 h-5" /> Payment & Bank Information
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                           <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none" value={bankName} onChange={e => setBankName(e.target.value)} placeholder="e.g. HDFC Bank" />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
                           <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none" value={accountName} onChange={e => setAccountName(e.target.value)} placeholder="e.g. Sanjay Kumar Basak" />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                           <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none" value={accountNumber} onChange={e => setAccountNumber(e.target.value)} />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">IFSC Code</label>
                           <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none" value={ifscCode} onChange={e => setIfscCode(e.target.value)} />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                           <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none" value={upiId} onChange={e => setUpiId(e.target.value)} placeholder="username@bank" />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">QR Code Image URL</label>
                           <input type="url" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none" value={qrCodeUrl} onChange={e => setQrCodeUrl(e.target.value)} placeholder="https://..." />
                        </div>
                      </div>
                    </div>
                  </section>

                   <div className="flex justify-end pt-4 border-t border-gray-100">
                    <button 
                      type="submit" 
                      className="px-6 py-2 bg-secondary text-white rounded hover:bg-green-700 font-medium shadow-sm flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" /> Save All Profile Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;