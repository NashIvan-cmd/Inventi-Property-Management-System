import React, { useState } from 'react';

export const Ticketing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tickets = [
    {
      id: '#TK-2024-001',
      title: 'Air Conditioning Not Working',
      tenant: 'Sarah Johnson',
      unit: 'A-1205',
      category: 'HVAC',
      priority: 'High',
      status: 'In Progress',
      assignedTo: 'HVAC Team',
      created: '2024-01-15',
      lastUpdate: '2024-01-16 14:30',
      description: 'Air conditioning unit in master bedroom is not cooling properly. Temperature remains high despite thermostat setting.'
    },
    {
      id: '#TK-2024-002',
      title: 'Noisy Neighbor Complaint',
      tenant: 'Mike Chen',
      unit: 'B-0804',
      category: 'Noise',
      priority: 'Medium',
      status: 'Under Review',
      assignedTo: 'Community Manager',
      created: '2024-01-14',
      lastUpdate: '2024-01-15 16:45',
      description: 'Excessive noise from upstairs unit (B-0904) during late night hours. Ongoing issue for the past week.'
    },
    {
      id: '#TK-2024-003',
      title: 'Water Leak in Bathroom',
      tenant: 'Lisa Rodriguez',
      unit: 'C-0612',
      category: 'Plumbing',
      priority: 'High',
      status: 'Resolved',
      assignedTo: 'Plumbing Team',
      created: '2024-01-13',
      lastUpdate: '2024-01-14 10:20',
      description: 'Water leak detected under bathroom sink. Water damage visible on cabinet floor.'
    },
    {
      id: '#TK-2024-004',
      title: 'Parking Space Violation',
      tenant: 'David Kim',
      unit: 'A-0321',
      category: 'Parking',
      priority: 'Low',
      status: 'Open',
      assignedTo: 'Security Team',
      created: '2024-01-12',
      lastUpdate: '2024-01-12 09:15',
      description: 'Vehicle parked in reserved space #A-125. License plate ABC-1234 blocking assigned parking.'
    },
    {
      id: '#TK-2024-005',
      title: 'Elevator Out of Service',
      tenant: 'Multiple Residents',
      unit: 'Building A',
      category: 'Elevator',
      priority: 'Critical',
      status: 'In Progress',
      assignedTo: 'Elevator Maintenance',
      created: '2024-01-11',
      lastUpdate: '2024-01-16 08:00',
      description: 'Elevator #2 in Building A is not functioning. Emergency repair required.'
    }
  ];

  const recentActivity = [
    { time: '10 minutes ago', action: 'Ticket #TK-2024-001 updated', user: 'HVAC Team', status: 'progress' },
    { time: '1 hour ago', action: 'New ticket created #TK-2024-006', user: 'Jane Smith', status: 'new' },
    { time: '2 hours ago', action: 'Ticket #TK-2024-003 resolved', user: 'Plumbing Team', status: 'resolved' },
    { time: '4 hours ago', action: 'Ticket #TK-2024-002 assigned', user: 'Community Manager', status: 'assigned' },
    { time: '6 hours ago', action: 'Ticket #TK-2024-005 escalated', user: 'Building Manager', status: 'escalated' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-blue-100 text-blue-700';
      case 'In Progress': return 'bg-purple-100 text-purple-700';
      case 'Under Review': return 'bg-yellow-100 text-yellow-700';
      case 'Resolved': return 'bg-green-100 text-green-700';
      case 'Closed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'HVAC': return 'ac_unit';
      case 'Plumbing': return 'plumbing';
      case 'Electrical': return 'electrical_services';
      case 'Noise': return 'volume_up';
      case 'Parking': return 'local_parking';
      case 'Elevator': return 'elevator';
      case 'Security': return 'security';
      default: return 'support_agent';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <span className="material-symbols-outlined text-blue-600 text-4xl mr-3">support_agent</span>
            Tenant Concern Ticketing
          </h1>
          <p className="mt-2 text-lg text-gray-600">Manage and track tenant concerns efficiently</p>
        </div>
        <div className="mt-4 lg:mt-0 flex space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center">
            <span className="material-symbols-outlined mr-2">add_circle</span>
            Create Ticket
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-colors flex items-center">
            <span className="material-symbols-outlined mr-2">download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Streamlined Tenant Support</h2>
        <p className="text-lg mb-6 text-gray-700">
          Efficiently manage tenant concerns with our comprehensive ticketing system. Track issues, 
          assign teams, and ensure timely resolution for optimal resident satisfaction.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-2">search</span>
            Search Tickets
          </button>
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-2">analytics</span>
            View Analytics
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-blue-600">confirmation_number</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">47</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Open Tickets</h3>
          <p className="text-gray-600 text-sm">Active concerns</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-red-600">priority_high</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">8</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">High Priority</h3>
          <p className="text-gray-600 text-sm">Urgent issues</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-green-600">check_circle</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">234</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Resolved</h3>
          <p className="text-gray-600 text-sm">This month</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-purple-600">schedule</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">2.4</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Avg Response</h3>
          <p className="text-gray-600 text-sm">Hours</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
          { id: 'tickets', label: 'All Tickets', icon: 'list_alt' },
          { id: 'activity', label: 'Recent Activity', icon: 'history' }
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
      {activeTab === 'tickets' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">All Tickets</h2>
            <div className="flex space-x-3">
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm" title="Filter by category">
                <option>All Categories</option>
                <option>HVAC</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Noise</option>
                <option>Parking</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm" title="Filter by status">
                <option>All Status</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Under Review</option>
                <option>Resolved</option>
              </select>
            </div>
          </div>
          <div className="space-y-6">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="material-symbols-outlined text-gray-400 mr-2">{getCategoryIcon(ticket.category)}</span>
                      <span className="text-lg font-semibold text-gray-900">{ticket.title}</span>
                      <span className="ml-3 text-sm text-gray-500">{ticket.id}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{ticket.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span><strong>Tenant:</strong> {ticket.tenant}</span>
                      <span><strong>Unit:</strong> {ticket.unit}</span>
                      <span><strong>Created:</strong> {ticket.created}</span>
                      <span><strong>Assigned to:</strong> {ticket.assignedTo}</span>
                    </div>
                  </div>
                  <div className="ml-6 text-right">
                    <div className="flex flex-col space-y-2">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority}
                      </span>
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Last updated: {ticket.lastUpdate}</span>
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">View Details</button>
                    <button className="text-green-600 hover:text-green-800 font-medium text-sm">Update Status</button>
                    <button className="text-purple-600 hover:text-purple-800 font-medium text-sm">Assign Team</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'activity' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-blue-600 text-sm">
                    {activity.status === 'new' ? 'add_circle' : 
                     activity.status === 'resolved' ? 'check_circle' : 
                     activity.status === 'assigned' ? 'person_add' : 
                     activity.status === 'escalated' ? 'priority_high' : 'update'}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">by {activity.user}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'dashboard' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ticket Status Distribution */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Ticket Status Distribution</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-700">Open</span>
                </div>
                <span className="text-lg font-bold text-blue-600">47 (38%)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-700">In Progress</span>
                </div>
                <span className="text-lg font-bold text-purple-600">32 (26%)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-700">Under Review</span>
                </div>
                <span className="text-lg font-bold text-yellow-600">19 (15%)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-700">Resolved</span>
                </div>
                <span className="text-lg font-bold text-green-600">26 (21%)</span>
              </div>
            </div>
          </div>

          {/* Top Categories */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Top Ticket Categories</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">HVAC Issues</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                  </div>
                  <span className="text-sm text-gray-600">28</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Plumbing</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-green-600 h-2 rounded-full w-3/5"></div>
                  </div>
                  <span className="text-sm text-gray-600">19</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Noise Complaints</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-yellow-600 h-2 rounded-full w-2/5"></div>
                  </div>
                  <span className="text-sm text-gray-600">15</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Electrical</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-purple-600 h-2 rounded-full w-1/4"></div>
                  </div>
                  <span className="text-sm text-gray-600">12</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Parking</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-orange-600 h-2 rounded-full w-1/5"></div>
                  </div>
                  <span className="text-sm text-gray-600">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};