import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiFolder, FiUsers, FiMessageSquare, FiLogOut, FiUser } from 'react-icons/fi';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const navItems = [
    { id: 'projects', label: 'Projects', icon: <FiFolder className="mr-3" /> },
    { id: 'team', label: 'Team Members', icon: <FiUsers className="mr-3" /> },
    { id: 'inquiries', label: 'Inquiries', icon: <FiMessageSquare className="mr-3" /> },
    { id: 'profile', label: 'Admin Profile', icon: <FiUser className="mr-3" /> },
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 font-sans">
      
      {/* Sidebar */}
      <div className="flex flex-col w-64 bg-gray-900 border-r border-gray-800">
        <div className="h-20 flex items-center justify-center px-6 bg-black border-b border-gray-800">
          <span className="text-white text-xl font-bold tracking-tighter">SV<span className="text-[var(--color-brand-green)]">Admin</span></span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="px-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  activeTab === item.id 
                    ? 'bg-gray-800 text-[var(--color-brand-green)]' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-800 bg-gray-900">
          <button onClick={handleLogout} className="flex items-center text-gray-400 hover:text-white transition-colors w-full py-2 hover:bg-gray-800 rounded-md px-4">
            <FiLogOut className="mr-3" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50 focus:outline-none">
        
        {/* Topbar */}
        <div className="py-5 px-8 bg-white border-b border-gray-200 shadow-sm flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-gray-900 capitalize">{activeTab} Management</h1>
          <a href="/" target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-600 hover:text-[var(--color-brand-green)] flex items-center bg-gray-100 px-4 py-2 rounded-full transition-colors">
            <FiHome className="mr-2" /> View Live Website
          </a>
        </div>
        
        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="bg-white shadow-sm rounded-2xl p-8 min-h-[500px] border border-gray-100">
            {activeTab === 'projects' && (
              <div>
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800">All Projects</h2>
                  <button className="bg-[var(--color-brand-green)] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#18613c] transition-all shadow-sm flex items-center">
                    + Add New Project
                  </button>
                </div>
                <div className="text-center bg-gray-50 text-gray-500 py-24 border-2 border-dashed border-gray-200 rounded-xl">
                  {/* Real implementation would map projects here */}
                  <p className="text-lg">Backend API connection required to fetch projects.</p>
                  <p className="text-sm mt-2">Check console network activity when implemented.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'team' && (
              <div>
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800">Team Members</h2>
                  <button className="bg-black text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-all shadow-sm">
                    + Add Member
                  </button>
                </div>
                <div className="text-center bg-gray-50 text-gray-500 py-24 border-2 border-dashed border-gray-200 rounded-xl">
                  <p className="text-lg">Backend API connection required to fetch team members.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'inquiries' && (
              <div>
                <div className="mb-8 pb-4 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800">Customer Inquiries</h2>
                </div>
                <div className="text-center bg-gray-50 text-gray-500 py-24 border-2 border-dashed border-gray-200 rounded-xl">
                  <p className="text-lg">Backend API connection required to fetch inquiries.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'profile' && (
              <div>
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800">Admin Profile</h2>
                  <button className="bg-[var(--color-brand-green)] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#18613c] transition-all shadow-sm">
                    Save Changes
                  </button>
                </div>
                
                <div className="max-w-2xl bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-[var(--color-brand-green)] flex items-center justify-center border-4 border-white shadow-md">
                      <FiUser size={40} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Super Admin</h3>
                      <p className="text-gray-500">admin@srivaralakshmihomes.com</p>
                    </div>
                  </div>
                  
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input type="text" defaultValue="Super Admin" className="w-full p-4 bg-white rounded-xl border border-gray-200 focus:border-[var(--color-brand-green)] focus:ring-2 focus:ring-[var(--color-brand-green)] focus:ring-opacity-20 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input type="email" defaultValue="admin@srivaralakshmihomes.com" className="w-full p-4 bg-white rounded-xl border border-gray-200 focus:border-[var(--color-brand-green)] focus:ring-2 focus:ring-[var(--color-brand-green)] focus:ring-opacity-20 outline-none transition-all" />
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Update Password</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                          <input type="password" placeholder="••••••••" className="w-full p-4 bg-white rounded-xl border border-gray-200 focus:border-[var(--color-brand-green)] outline-none transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                          <input type="password" placeholder="••••••••" className="w-full p-4 bg-white rounded-xl border border-gray-200 focus:border-[var(--color-brand-green)] outline-none transition-all" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
