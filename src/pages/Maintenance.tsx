import React, { useState } from 'react';

export const Maintenance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const maintenanceTasks = [
    { id: 1, task: 'HVAC System Inspection', area: 'Building A - Floor 12', priority: 'High', dueDate: '2025-09-22', assignedTo: 'Tech Team Alpha', status: 'In Progress', category: 'HVAC' },
    { id: 2, task: 'Elevator Cable Maintenance', area: 'Elevator Bank B', priority: 'High', dueDate: '2025-09-25', assignedTo: 'Elevator Specialists', status: 'Scheduled', category: 'Elevator' },
    { id: 3, task: 'Fire Safety System Check', area: 'Entire Building', priority: 'High', dueDate: '2025-09-30', assignedTo: 'Safety Team', status: 'Pending', category: 'Safety' },
    { id: 4, task: 'Pool Filtration System', area: 'Recreation Area', priority: 'Medium', dueDate: '2025-10-05', assignedTo: 'Pool Maintenance', status: 'Scheduled', category: 'Recreation' },
    { id: 5, task: 'Parking Garage Lighting', area: 'Underground Parking', priority: 'Medium', dueDate: '2025-10-08', assignedTo: 'Electrical Team', status: 'Pending', category: 'Electrical' },
    { id: 6, task: 'Landscape Maintenance', area: 'Garden & Grounds', priority: 'Low', dueDate: '2025-10-12', assignedTo: 'Landscaping Crew', status: 'Scheduled', category: 'Landscaping' }
  ];

  const plannedMaintenance = [
    {
      id: 1,
      title: 'Quarterly HVAC Deep Clean',
      date: '2025-10-15',
      time: '08:00 AM - 05:00 PM',
      description: 'Comprehensive cleaning and maintenance of all HVAC units across the building.',
      impact: 'Temporary temperature fluctuations in some units',
      team: 'HVAC Specialists Inc.',
      cost: '$12,500'
    },
    {
      id: 2,
      title: 'Annual Fire Safety Inspection',
      date: '2025-10-20',
      time: '09:00 AM - 03:00 PM',
      description: 'Complete fire safety system inspection including alarms, sprinklers, and emergency exits.',
      impact: 'Brief alarm testing - residents will be notified',
      team: 'SafeGuard Fire Protection',
      cost: '$3,200'
    },
    {
      id: 3,
      title: 'Elevator Modernization Phase 1',
      date: '2025-11-01',
      time: '06:00 AM - 08:00 PM',
      description: 'Modernization of elevator systems in Bank A - new control systems and safety features.',
      impact: 'Elevator Bank A will be out of service',
      team: 'ModernLift Solutions',
      cost: '$85,000'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'In Progress': return 'bg-blue-100 text-blue-700';
      case 'Scheduled': return 'bg-purple-100 text-purple-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Overdue': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <span className="material-symbols-outlined text-amber-600 text-4xl mr-3">build_circle</span>
            Preventive Maintenance
          </h1>
          <p className="mt-2 text-lg text-gray-600">Schedule and track maintenance tasks efficiently</p>
        </div>
        <div className="mt-4 lg:mt-0 flex space-x-3">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center">
            <span className="material-symbols-outlined mr-2">add_task</span>
            Schedule Task
          </button>
          <button className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-xl font-semibold transition-colors flex items-center">
            <span className="material-symbols-outlined mr-2">calendar_month</span>
            View Calendar
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Preventive Maintenance Scheduling</h2>
        <p className="text-lg mb-6 text-gray-700">
          Streamline maintenance operations with automated scheduling, task tracking, and team coordination 
          to ensure optimal building performance and resident satisfaction.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-2">schedule</span>
            Create Schedule
          </button>
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-2">assignment</span>
            Assign Tasks
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-red-600">priority_high</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">12</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Urgent Tasks</h3>
          <p className="text-gray-600 text-sm">Requires immediate attention</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-amber-600">schedule</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">28</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Scheduled</h3>
          <p className="text-gray-600 text-sm">Planned maintenance tasks</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-green-600">check_circle</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">156</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Completed</h3>
          <p className="text-gray-600 text-sm">This month</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
          { id: 'tasks', label: 'Upcoming Tasks', icon: 'assignment' },
          { id: 'planned', label: 'Planned Maintenance', icon: 'event_note' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center ${
              activeTab === tab.id
                ? 'bg-white text-amber-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span className="material-symbols-outlined mr-2 text-sm">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      {activeTab === 'tasks' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-6">Upcoming Maintenance Tasks</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {maintenanceTasks.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{task.task}</div>
                      <div className="text-sm text-gray-500">{task.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{task.area}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{task.dueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{task.assignedTo}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(task.status)}`}>
                        {task.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-amber-600 hover:text-amber-800 font-medium mr-3">Edit</button>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'planned' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Upcoming Planned Maintenance</h2>
            <button className="text-amber-600 hover:text-amber-800 font-medium">View Calendar</button>
          </div>
          <div className="space-y-6">
            {plannedMaintenance.map((maintenance) => (
              <div key={maintenance.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{maintenance.title}</h3>
                    <p className="text-gray-600 mt-1">{maintenance.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-lg font-bold text-gray-900">{maintenance.cost}</div>
                    <div className="text-sm text-gray-500">{maintenance.date}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <span className="material-symbols-outlined mr-2 text-sm">schedule</span>
                    {maintenance.time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="material-symbols-outlined mr-2 text-sm">group</span>
                    {maintenance.team}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="material-symbols-outlined mr-2 text-sm">warning</span>
                    {maintenance.impact}
                  </div>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    View Details
                  </button>
                  <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-colors">
                    Reschedule
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 font-medium px-4 py-2">
                    Notify Residents
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'dashboard' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Task Status Overview */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Task Status Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-700">Completed</span>
                </div>
                <span className="text-lg font-bold text-green-600">156 (65%)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-700">In Progress</span>
                </div>
                <span className="text-lg font-bold text-blue-600">28 (12%)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-700">Scheduled</span>
                </div>
                <span className="text-lg font-bold text-purple-600">43 (18%)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-700">Overdue</span>
                </div>
                <span className="text-lg font-bold text-red-600">12 (5%)</span>
              </div>
            </div>
          </div>

          {/* Average Completion Time */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4">Average Completion Time</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">3.2</div>
              <div className="text-lg text-gray-600 mb-2">Days</div>
              <div className="text-sm text-green-600 font-medium">15% faster than last month</div>
            </div>
          </div>

          {/* Top Maintenance Categories */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Top Maintenance Categories</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">HVAC Systems</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-amber-600 h-2 rounded-full w-4/5"></div>
                  </div>
                  <span className="text-sm text-gray-600">32</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Electrical</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-blue-600 h-2 rounded-full w-3/5"></div>
                  </div>
                  <span className="text-sm text-gray-600">24</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Plumbing</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-green-600 h-2 rounded-full w-2/5"></div>
                  </div>
                  <span className="text-sm text-gray-600">18</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Safety Systems</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-red-600 h-2 rounded-full w-1/5"></div>
                  </div>
                  <span className="text-sm text-gray-600">9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};