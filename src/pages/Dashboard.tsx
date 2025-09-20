import React from 'react';
import { DashboardStat } from '@/types';

// Mock data for the dashboard
const dashboardStats: DashboardStat[] = [
  {
    id: '1',
    title: 'Total Units',
    value: 245,
    change: 5.2,
    changeType: 'positive',
    icon: 'apartment',
    color: 'primary',
  },
  {
    id: '2',
    title: 'Active Residents',
    value: 312,
    change: 2.1,
    changeType: 'positive',
    icon: 'people',
    color: 'success',
  },
  {
    id: '3',
    title: 'Monthly Revenue',
    value: '$124,560',
    change: -3.2,
    changeType: 'negative',
    icon: 'account_balance_wallet',
    color: 'warning',
  },
  {
    id: '4',
    title: 'Maintenance Requests',
    value: 28,
    change: 12.5,
    changeType: 'negative',
    icon: 'build',
    color: 'danger',
  },
];

const quickActions = [
  { id: '1', title: 'New Marketplace Listing', icon: 'add_business', color: 'blue', description: 'Post a new item for sale' },
  { id: '2', title: 'Generate QR Code', icon: 'qr_code', color: 'green', description: 'Create visitor access code' },
  { id: '3', title: 'Schedule Maintenance', icon: 'schedule', color: 'yellow', description: 'Plan maintenance task' },
  { id: '4', title: 'Create Ticket', icon: 'support_agent', color: 'red', description: 'Report an issue' },
];

const recentActivities = [
  { id: '1', title: 'New resident moved into Unit 204', time: '2 hours ago', type: 'info', user: 'Sarah Johnson' },
  { id: '2', title: 'Maintenance completed in Gym', time: '4 hours ago', type: 'success', user: 'Mike Wilson' },
  { id: '3', title: 'Billing reminder sent to all residents', time: '1 day ago', type: 'info', user: 'System' },
  { id: '4', title: 'Security incident reported in Parking B', time: '2 days ago', type: 'warning', user: 'Security Team' },
  { id: '5', title: 'Pool maintenance scheduled for next week', time: '3 days ago', type: 'info', user: 'Facilities' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-lg text-gray-600">Welcome to your property management overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className={`h-1 ${
              stat.color === 'primary' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
              stat.color === 'success' ? 'bg-gradient-to-r from-green-500 to-green-600' :
              stat.color === 'warning' ? 'bg-gradient-to-r from-amber-500 to-amber-600' :
              'bg-gradient-to-r from-red-500 to-red-600'
            }`} />
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <div className="mt-3 flex items-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      stat.changeType === 'positive' ? 'text-green-700 bg-green-100' :
                      stat.changeType === 'negative' ? 'text-red-700 bg-red-100' :
                      'text-gray-700 bg-gray-100'
                    }`}>
                      <span className="material-symbols-outlined text-xs mr-1">
                        {stat.changeType === 'positive' ? 'trending_up' : 
                         stat.changeType === 'negative' ? 'trending_down' : 'trending_flat'}
                      </span>
                      {Math.abs(stat.change)}%
                    </span>
                    <span className="text-sm text-gray-500 ml-2">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-xl ${
                  stat.color === 'primary' ? 'bg-blue-50' :
                  stat.color === 'success' ? 'bg-green-50' :
                  stat.color === 'warning' ? 'bg-amber-50' :
                  'bg-red-50'
                }`}>
                  <span className={`material-symbols-outlined text-2xl ${
                    stat.color === 'primary' ? 'text-blue-600' :
                    stat.color === 'success' ? 'text-green-600' :
                    stat.color === 'warning' ? 'text-amber-600' :
                    'text-red-600'
                  }`}>
                    {stat.icon}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-blue-50 rounded-lg mr-3">
              <span className="material-symbols-outlined text-blue-600">flash_on</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="space-y-3">
            {quickActions.map((action) => (
              <button
                key={action.id}
                className="w-full flex items-center p-4 text-left rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className={`p-3 rounded-lg mr-4 transition-colors duration-200 ${
                  action.color === 'blue' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-200' :
                  action.color === 'green' ? 'bg-green-100 text-green-600 group-hover:bg-green-200' :
                  action.color === 'yellow' ? 'bg-amber-100 text-amber-600 group-hover:bg-amber-200' :
                  'bg-red-100 text-red-600 group-hover:bg-red-200'
                }`}>
                  <span className="material-symbols-outlined text-xl">{action.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-gray-700">{action.title}</div>
                  <div className="text-sm text-gray-500">{action.description}</div>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-gray-600">chevron_right</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-50 rounded-lg mr-3">
                <span className="material-symbols-outlined text-green-600">history</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Recent Activities</h3>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className={`p-2 rounded-full mt-1 flex-shrink-0 ${
                  activity.type === 'success' ? 'bg-green-100' :
                  activity.type === 'warning' ? 'bg-amber-100' :
                  'bg-blue-100'
                }`}>
                  <span className={`material-symbols-outlined text-sm ${
                    activity.type === 'success' ? 'text-green-600' :
                    activity.type === 'warning' ? 'text-amber-600' :
                    'text-blue-600'
                  }`}>
                    {activity.type === 'success' ? 'check_circle' :
                     activity.type === 'warning' ? 'warning' :
                     'info'}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>{activity.user}</span>
                    <span className="mx-2">•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="material-symbols-outlined text-gray-400 text-sm">more_vert</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Overview Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* System Status */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-green-50 rounded-lg mr-3">
              <span className="material-symbols-outlined text-green-600">settings</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">System Status</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-gray-600 mr-3">videocam</span>
                <span className="text-sm font-medium text-gray-900">CCTV System</span>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Online
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-gray-600 mr-3">security</span>
                <span className="text-sm font-medium text-gray-900">Access Control</span>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Online
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-gray-600 mr-3">local_fire_department</span>
                <span className="text-sm font-medium text-gray-900">Fire Safety</span>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                Maintenance
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-gray-600 mr-3">elevator</span>
                <span className="text-sm font-medium text-gray-900">Elevator System</span>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Online
              </span>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-purple-50 rounded-lg mr-3">
              <span className="material-symbols-outlined text-purple-600">event</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Upcoming Events</h3>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-sm font-semibold text-gray-900">Building Committee Meeting</p>
              <p className="text-xs text-gray-500 mt-1">Tomorrow, 2:00 PM - Conference Room</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="text-sm font-semibold text-gray-900">Monthly Fire Drill</p>
              <p className="text-xs text-gray-500 mt-1">March 15, 10:00 AM - All Floors</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4 py-2">
              <p className="text-sm font-semibold text-gray-900">Elevator Maintenance</p>
              <p className="text-xs text-gray-500 mt-1">March 20, 8:00 AM - Elevator A</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <p className="text-sm font-semibold text-gray-900">Community BBQ Event</p>
              <p className="text-xs text-gray-500 mt-1">March 25, 6:00 PM - Rooftop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};