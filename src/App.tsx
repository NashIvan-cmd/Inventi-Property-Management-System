import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Marketplace } from './pages/Marketplace';
import { Finance } from './pages/Finance';
import { AccessControl } from './pages/AccessControl';
import { Maintenance } from './pages/Maintenance';
import { Ticketing } from './pages/Ticketing';
import { Monitoring } from './pages/Monitoring';

// Mock user data
const mockUser = {
  name: 'John Smith',
  role: 'Property Manager',
  avatar: undefined,
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <Dashboard />;
      case '/marketplace':
        return <Marketplace />;
      case '/finance':
        return <Finance />;
      case '/access':
        return <AccessControl />;
      case '/maintenance':
        return <Maintenance />;
      case '/ticketing':
        return <Ticketing />;
      case '/monitoring':
        return <Monitoring />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <Header
          onMenuToggle={() => setSidebarOpen(true)}
          user={mockUser}
        />

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;