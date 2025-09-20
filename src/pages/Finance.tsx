import React, { useState } from 'react';

export const Finance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const billingData = [
    { id: 1, unit: 'Unit 12A', resident: 'Sarah Johnson', amount: '$2,450', dueDate: '2025-09-30', status: 'paid', method: 'Auto-pay' },
    { id: 2, unit: 'Unit 8B', resident: 'Mike Chen', amount: '$2,380', dueDate: '2025-09-28', status: 'overdue', method: 'Bank Transfer' },
    { id: 3, unit: 'Unit 15C', resident: 'Emma Davis', amount: '$2,520', dueDate: '2025-10-01', status: 'pending', method: 'Credit Card' },
    { id: 4, unit: 'Unit 3A', resident: 'James Wilson', amount: '$2,200', dueDate: '2025-09-25', status: 'paid', method: 'Check' },
    { id: 5, unit: 'Unit 21B', resident: 'Lisa Garcia', amount: '$2,680', dueDate: '2025-10-02', status: 'pending', method: 'Auto-pay' }
  ];

  const expenseApprovals = [
    {
      id: 1,
      title: 'Elevator Maintenance Contract',
      category: 'Maintenance',
      amount: '$15,000',
      requestedBy: 'Facilities Manager',
      date: '2025-09-18',
      priority: 'high',
      description: 'Annual elevator maintenance and inspection contract renewal'
    },
    {
      id: 2,
      title: 'Security System Upgrade',
      category: 'Security',
      amount: '$8,500',
      requestedBy: 'Security Team',
      date: '2025-09-17',
      priority: 'medium',
      description: 'Upgrade CCTV cameras and access control system in parking garage'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'overdue': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <span className="material-symbols-outlined text-green-600 text-4xl mr-3">account_balance_wallet</span>
            Financial Management
          </h1>
          <p className="mt-2 text-lg text-gray-600">Comprehensive billing, collections, and expense management</p>
        </div>
        <div className="mt-4 lg:mt-0 flex space-x-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center">
            <span className="material-symbols-outlined mr-2">assessment</span>
            Generate Report
          </button>
          <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl font-semibold transition-colors flex items-center">
            <span className="material-symbols-outlined mr-2">download</span>
            Export Data
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Financial Oversight Tools</h2>
        <p className="text-lg mb-6 text-gray-700">
          Automate billing processes, track collections, monitor expenses and maintain financial transparency across all property operations.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-2">receipt_long</span>
            Process Billing
          </button>
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-2">account_balance</span>
            Collections
          </button>
          <button className="flex-1 border border-amber-600 text-amber-600 hover:bg-amber-50 py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-2">approval</span>
            Approvals
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-green-600">trending_up</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">$124,560</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Monthly Revenue</h3>
          <div className="flex items-center mt-2">
            <span className="text-green-600 text-sm font-medium">+5.2%</span>
            <span className="text-gray-500 text-sm ml-1">vs last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-red-600">trending_down</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">$8,420</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Outstanding</h3>
          <div className="flex items-center mt-2">
            <span className="text-red-600 text-sm font-medium">-12.5%</span>
            <span className="text-gray-500 text-sm ml-1">vs last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-blue-600">percent</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">94.2%</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Collection Rate</h3>
          <div className="flex items-center mt-2">
            <span className="text-green-600 text-sm font-medium">+2.1%</span>
            <span className="text-gray-500 text-sm ml-1">vs last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-amber-600">receipt</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">$28,940</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Expenses</h3>
          <div className="flex items-center mt-2">
            <span className="text-amber-600 text-sm font-medium">+3.8%</span>
            <span className="text-gray-500 text-sm ml-1">vs last month</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
          { id: 'billing', label: 'Billing & Collections', icon: 'receipt_long' },
          { id: 'approvals', label: 'Expense Approvals', icon: 'approval' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center ${
              activeTab === tab.id
                ? 'bg-white text-green-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span className="material-symbols-outlined mr-2 text-sm">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      {activeTab === 'billing' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-6">Recent Billing & Collections</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resident</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {billingData.map((bill) => (
                  <tr key={bill.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bill.unit}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{bill.resident}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{bill.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{bill.dueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(bill.status)}`}>
                        {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{bill.method}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-green-600 hover:text-green-800 font-medium mr-3">View</button>
                      {bill.status === 'overdue' && (
                        <button className="text-red-600 hover:text-red-800 font-medium">Remind</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'approvals' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-6">Pending Expense Approvals</h2>
          <div className="space-y-6">
            {expenseApprovals.map((expense) => (
              <div key={expense.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{expense.title}</h3>
                    <p className="text-gray-600 mt-1">{expense.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-gray-900">{expense.amount}</div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(expense.priority)}`}>
                      {expense.priority.charAt(0).toUpperCase() + expense.priority.slice(1)} Priority
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-1 text-sm">category</span>
                    {expense.category}
                  </div>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-1 text-sm">person</span>
                    {expense.requestedBy}
                  </div>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-1 text-sm">calendar_today</span>
                    {expense.date}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                    <span className="material-symbols-outlined mr-2 text-sm">check</span>
                    Approve
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                    <span className="material-symbols-outlined mr-2 text-sm">close</span>
                    Reject
                  </button>
                  <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                    <span className="material-symbols-outlined mr-2 text-sm">chat</span>
                    Request Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'dashboard' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Financial Stats */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Financial Overview</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Total Units</span>
                <span className="text-lg font-bold text-gray-900">245</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Occupancy Rate</span>
                <span className="text-lg font-bold text-green-600">97.5%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Average Rent</span>
                <span className="text-lg font-bold text-gray-900">$2,450</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Monthly Operating Cost</span>
                <span className="text-lg font-bold text-red-600">$45,200</span>
              </div>
            </div>
          </div>

          {/* Upcoming Due Dates */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Upcoming Due Dates</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Insurance Premium</div>
                  <div className="text-sm text-gray-500">Due in 3 days</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">$12,500</div>
                  <div className="text-xs text-amber-600">Pending</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Utility Bills</div>
                  <div className="text-sm text-gray-500">Due in 1 week</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">$8,750</div>
                  <div className="text-xs text-green-600">Scheduled</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Property Tax</div>
                  <div className="text-sm text-gray-500">Due in 2 weeks</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">$25,000</div>
                  <div className="text-xs text-blue-600">Approved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};