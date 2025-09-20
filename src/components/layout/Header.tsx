import React, { useState } from 'react';

interface HeaderProps {
  onMenuToggle: () => void;
  user: {
    name: string;
    avatar?: string;
    role: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle, user }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications] = useState(3); // Mock notification count

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left section */}
          <div className="flex items-center">
            <button
              onClick={onMenuToggle}
              className="p-3 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors lg:hidden"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            
            <div className="flex items-center ml-4 lg:ml-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-xl">apartment</span>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">FIT</h1>
                <span className="text-sm text-gray-500 font-medium hidden sm:block">Property Management</span>
              </div>
            </div>
          </div>

          {/* Center section - Search bar (hidden on mobile) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400">search</span>
              </div>
              <input
                type="text"
                placeholder="Search properties, residents, tickets..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-2">
            {/* Search button for mobile */}
            <button className="md:hidden p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>

            {/* Notifications */}
            <button className="relative p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              {notifications > 0 && (
                <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
              )}
            </button>

            {/* Messages */}
            <button className="relative p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </button>

            {/* User menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 text-sm rounded-xl p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl flex items-center justify-center shadow-sm">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-xl object-cover" />
                  ) : (
                    <span className="material-symbols-outlined text-gray-600">person</span>
                  )}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.role}</div>
                </div>
                <span className="material-symbols-outlined text-gray-400 hidden sm:block">expand_more</span>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.role}</div>
                  </div>
                  <div className="py-2">
                    <button className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <span className="material-symbols-outlined mr-3 text-gray-400">person</span>
                      Profile Settings
                    </button>
                    <button className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <span className="material-symbols-outlined mr-3 text-gray-400">settings</span>
                      Preferences
                    </button>
                    <button className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <span className="material-symbols-outlined mr-3 text-gray-400">help</span>
                      Help & Support
                    </button>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <button className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                        <span className="material-symbols-outlined mr-3 text-red-500">logout</span>
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};