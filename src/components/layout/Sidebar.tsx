import React from 'react';
import { NavigationItem } from '@/types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/',
  },
  {
    id: 'marketplace',
    label: 'Marketplace',
    icon: 'storefront',
    path: '/marketplace',
  },
  {
    id: 'finance',
    label: 'Finance',
    icon: 'account_balance_wallet',
    path: '/finance',
  },
  {
    id: 'access',
    label: 'Access Control',
    icon: 'qr_code_scanner',
    path: '/access',
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    icon: 'build_circle',
    path: '/maintenance',
  },
  {
    id: 'ticketing',
    label: 'Ticketing',
    icon: 'confirmation_number',
    path: '/ticketing',
  },
  {
    id: 'monitoring',
    label: 'Monitoring',
    icon: 'monitoring',
    path: '/monitoring',
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentPath, onNavigate }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-72 bg-white shadow-xl border-r border-gray-100 transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0 lg:flex lg:flex-shrink-0 lg:z-10
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-gray-100 lg:hidden bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-xl">apartment</span>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">FIT</h1>
                <p className="text-xs text-gray-500 font-medium">Property Management</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-white/60 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Desktop Logo */}
          <div className="hidden lg:flex items-center h-20 px-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-xl">apartment</span>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">FIT</h1>
              <p className="text-xs text-gray-500 font-medium">Property Management</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.path);
                  onClose();
                }}
                className={`
                  group w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02]
                  ${
                    currentPath === item.path
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:shadow-sm'
                  }
                `}
              >
                <div className={`p-2 rounded-lg mr-3 transition-colors ${
                  currentPath === item.path
                    ? 'bg-white/20'
                    : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <span className={`material-symbols-outlined text-lg ${
                    currentPath === item.path ? 'text-white' : 'text-gray-600 group-hover:text-gray-700'
                  }`}>
                    {item.icon}
                  </span>
                </div>
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-100 text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                {currentPath === item.path && (
                  <div className="absolute right-0 w-1 h-8 bg-white rounded-l-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Sidebar footer */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="text-center">
              <div className="text-xs text-gray-500 font-medium mb-2">
                © 2025 FIT Property Management
              </div>
              <div className="flex items-center justify-center space-x-1 text-xs text-gray-400">
                <span className="material-symbols-outlined text-sm">security</span>
                <span>Secure & Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};