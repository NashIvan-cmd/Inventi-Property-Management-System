import React, { useState } from 'react';

export const AccessControl: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const accessLogs = [
    { id: 1, timestamp: '2025-09-19 14:30', location: 'Main Entrance', user: 'Sarah Johnson', type: 'Resident', status: 'Success', method: 'QR Code' },
    { id: 2, timestamp: '2025-09-19 14:15', location: 'Parking Garage', user: 'Delivery Service', type: 'Visitor', status: 'Success', method: 'Temp QR' },
    { id: 3, timestamp: '2025-09-19 13:45', location: 'Service Entrance', user: 'Mike Chen', type: 'Resident', status: 'Success', method: 'QR Code' },
    { id: 4, timestamp: '2025-09-19 13:20', location: 'Main Entrance', user: 'Food Delivery', type: 'Visitor', status: 'Failed', method: 'Expired QR' },
    { id: 5, timestamp: '2025-09-19 12:50', location: 'Gym Entrance', user: 'Emma Davis', type: 'Resident', status: 'Success', method: 'QR Code' },
    { id: 6, timestamp: '2025-09-19 12:30', location: 'Pool Area', user: 'James Wilson', type: 'Resident', status: 'Success', method: 'QR Code' },
    { id: 7, timestamp: '2025-09-19 11:45', location: 'Main Entrance', user: 'Maintenance Team', type: 'Service', status: 'Success', method: 'Service QR' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success': return 'bg-green-100 text-green-700';
      case 'Failed': return 'bg-red-100 text-red-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Resident': return 'bg-blue-100 text-blue-700';
      case 'Visitor': return 'bg-purple-100 text-purple-700';
      case 'Service': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="material-symbols-outlined text-blue-600 text-4xl mr-3">qr_code_scanner</span>
              <h1 className="text-3xl font-bold text-blue-800">FIT - QR Access Control</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="font-medium hover:text-blue-700 transition-colors">Dashboard</a>
              <a href="#" className="font-medium hover:text-blue-700 transition-colors">Logs</a>
              <a href="#" className="font-medium hover:text-blue-700 transition-colors">Users</a>
              <a href="#" className="font-medium hover:text-blue-700 transition-colors">Settings</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-blue-200 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 rounded-full hover:bg-blue-200 transition-colors">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
              <button className="md:hidden p-2 rounded-full hover:bg-blue-200 transition-colors">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 transform hover:scale-[1.01] transition-transform">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">QR-based Access Control</h2>
            <p className="text-xl mb-8">
              Secure and fast logging for tenants, visitors, and deliveries using QR codes, ensuring
              efficient monitoring and access control.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined mr-2">person_add</span> Register a New Tenant QR Code
              </button>
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined mr-2">person_search</span> Register Temporary Guest QR Code
              </button>
              <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined mr-2">search</span> View Access Logs
              </button>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="material-symbols-outlined text-blue-600 text-3xl p-2 bg-blue-100 rounded-full mr-4">security</span>
                <h3 className="text-xl font-semibold">Secure Access</h3>
              </div>
              <p>
                Only users with valid QR codes can gain entry, ensuring secure premises.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="material-symbols-outlined text-blue-600 text-3xl p-2 bg-blue-100 rounded-full mr-4">history</span>
                <h3 className="text-xl font-semibold">Real-Time Monitoring</h3>
              </div>
              <p>
                Live access logs are updated instantly for security personnel and management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="material-symbols-outlined text-blue-600 text-3xl p-2 bg-blue-100 rounded-full mr-4">groups</span>
                <h3 className="text-xl font-semibold">Tenant & Visitor Management</h3>
              </div>
              <p>
                Keep track of who is on the premises and control visitor and delivery access efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Access Logs Table */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Recent Access Logs</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-3">Log ID</th>
                  <th className="text-left py-4 px-3">Name</th>
                  <th className="text-left py-4 px-3">Type</th>
                  <th className="text-left py-4 px-3">Access Time</th>
                  <th className="text-left py-4 px-3">Details</th>
                  <th className="text-left py-4 px-3">Status</th>
                  <th className="text-left py-4 px-3">Expiry / Usage</th>
                  <th className="text-left py-4 px-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Tenant QR code log */}
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="py-4 px-3">#LOG1007</td>
                  <td className="py-4 px-3">Alice Johnson</td>
                  <td className="py-4 px-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Tenant</span>
                  </td>
                  <td className="py-4 px-3">2025-09-19 08:45 AM</td>
                  <td className="py-4 px-3">Accessed Room #305</td>
                  <td className="py-4 px-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Granted</span>
                  </td>
                  <td className="py-4 px-3">--</td>
                  <td className="py-4 px-3">
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors" title="View Details">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </td>
                </tr>
                {/* Temporary Guest QR code log */}
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="py-4 px-3">#LOG1006</td>
                  <td className="py-4 px-3">Guest - Michael Lee</td>
                  <td className="py-4 px-3">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Temporary Guest</span>
                  </td>
                  <td className="py-4 px-3">2025-09-19 08:40 AM</td>
                  <td className="py-4 px-3">Accessed Room #207</td>
                  <td className="py-4 px-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Granted</span>
                  </td>
                  <td className="py-4 px-3">Expires in 3 days</td>
                  <td className="py-4 px-3">
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors" title="View Details">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </td>
                </tr>
                {/* Delivery QR code log */}
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="py-4 px-3">#LOG1003</td>
                  <td className="py-4 px-3">Delivery - Amazon</td>
                  <td className="py-4 px-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">Delivery</span>
                  </td>
                  <td className="py-4 px-3">2025-09-19 08:10 AM</td>
                  <td className="py-4 px-3">Accessed Loading Dock</td>
                  <td className="py-4 px-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Granted</span>
                  </td>
                  <td className="py-4 px-3">One-time use only</td>
                  <td className="py-4 px-3">
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors" title="View Details">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors flex items-center justify-center mx-auto">
              View All Access Logs
              <span className="material-symbols-outlined text-sm align-middle ml-1">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Access Statistics */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md col-span-1">
            <h3 className="text-xl font-semibold mb-4">Access Status Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1"><span>Granted</span> <span>76%</span></div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1"><span>Denied</span> <span>14%</span></div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-500 h-2.5 rounded-full w-1/6"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1"><span>Pending</span> <span>10%</span></div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full w-1/12"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md col-span-1 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4">Average Entry Time</h3>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600">9.8</div>
              <div className="text-sm text-gray-500">seconds average per scan</div>
              <div className="flex items-center justify-center mt-2 text-green-600">
                <span className="material-symbols-outlined text-sm">trending_down</span>
                <span className="text-sm ml-1">5% faster than last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md col-span-1">
            <h3 className="text-xl font-semibold mb-4">Top Access Points</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-2 hover:bg-blue-50 rounded-lg transition-colors">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-blue-600 mr-2">door_front</span>
                  <span>Main Entrance</span>
                </div>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">42%</span>
              </li>
              <li className="flex items-center justify-between p-2 hover:bg-blue-50 rounded-lg transition-colors">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-blue-600 mr-2">door_front</span>
                  <span>Side Entrance</span>
                </div>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">28%</span>
              </li>
              <li className="flex items-center justify-between p-2 hover:bg-blue-50 rounded-lg transition-colors">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-blue-600 mr-2">local_shipping</span>
                  <span>Loading Dock</span>
                </div>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">20%</span>
              </li>
              <li className="flex items-center justify-between p-2 hover:bg-blue-50 rounded-lg transition-colors">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-blue-600 mr-2">meeting_room</span>
                  <span>Lobby</span>
                </div>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">10%</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Tab Navigation and Content */}
        <div className="space-y-8">
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
              { id: 'logs', label: 'Access Logs', icon: 'history' },
              { id: 'generate', label: 'Generate QR', icon: 'qr_code' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="material-symbols-outlined mr-2 text-sm">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content based on active tab */}
          {activeTab === 'logs' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold mb-6">Detailed Access Logs</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {accessLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.timestamp}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{log.user}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(log.type)}`}>
                            {log.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{log.method}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(log.status)}`}>
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'generate' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* QR Code Generator */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <span className="material-symbols-outlined text-blue-600">qr_code</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Quick Access Generator</h3>
                    <p className="text-gray-600">Generate temporary access codes</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-gray-600 mr-3">schedule</span>
                      <span className="text-sm font-medium text-gray-700">Visitor Access (1 day)</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">Generate</button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-gray-600 mr-3">local_shipping</span>
                      <span className="text-sm font-medium text-gray-700">Delivery Access (2 hours)</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">Generate</button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-gray-600 mr-3">build</span>
                      <span className="text-sm font-medium text-gray-700">Service Access (4 hours)</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">Generate</button>
                  </div>
                  <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-xl text-center">
                    <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="material-symbols-outlined text-gray-400 text-4xl">qr_code</span>
                    </div>
                    <p className="text-sm text-gray-600">Generated QR code will appear here</p>
                  </div>
                </div>
              </div>

              {/* Access Statistics Preview */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">Active QR Codes</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">248</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">Temporary Codes</span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">15</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">Expired Codes</span>
                      </div>
                      <span className="text-lg font-bold text-amber-600">8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Real-time Activity */}
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-4">Live Access Activity</h3>
                <div className="space-y-3">
                  {accessLogs.slice(0, 5).map((log) => (
                    <div key={log.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          log.status === 'Success' ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{log.location}</p>
                          <p className="text-xs text-gray-500">{log.timestamp} - {log.user}</p>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(log.status)}`}>
                        {log.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-4">System Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-gray-600 mr-3">door_open</span>
                      <span className="text-sm font-medium text-gray-900">Main Entrance</span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      Online
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-gray-600 mr-3">garage</span>
                      <span className="text-sm font-medium text-gray-900">Parking Gate</span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      Online
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-gray-600 mr-3">security</span>
                      <span className="text-sm font-medium text-gray-900">Security System</span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      Armed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};