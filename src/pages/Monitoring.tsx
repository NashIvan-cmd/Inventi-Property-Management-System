import React, { useState } from 'react';

export const Monitoring: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const cctvCameras = [
    { id: 'CAM-001', location: 'Main Lobby', status: 'Online', quality: 'HD', lastUpdate: '2 minutes ago' },
    { id: 'CAM-002', location: 'Parking Garage Level 1', status: 'Online', quality: 'HD', lastUpdate: '1 minute ago' },
    { id: 'CAM-003', location: 'Parking Garage Level 2', status: 'Offline', quality: 'N/A', lastUpdate: '15 minutes ago' },
    { id: 'CAM-004', location: 'Pool Area', status: 'Online', quality: 'HD', lastUpdate: '3 minutes ago' },
    { id: 'CAM-005', location: 'Gym Entrance', status: 'Online', quality: '4K', lastUpdate: '1 minute ago' },
    { id: 'CAM-006', location: 'Rooftop Garden', status: 'Maintenance', quality: 'N/A', lastUpdate: '45 minutes ago' },
    { id: 'CAM-007', location: 'Emergency Exit A', status: 'Online', quality: 'HD', lastUpdate: '2 minutes ago' },
    { id: 'CAM-008', location: 'Emergency Exit B', status: 'Online', quality: 'HD', lastUpdate: '4 minutes ago' }
  ];

  const sensors = [
    { id: 'TEMP-001', type: 'Temperature', location: 'HVAC Room A', value: '22.5°C', status: 'Normal', threshold: '18-26°C' },
    { id: 'TEMP-002', type: 'Temperature', location: 'HVAC Room B', value: '23.1°C', status: 'Normal', threshold: '18-26°C' },
    { id: 'HUMID-001', type: 'Humidity', location: 'Pool Area', value: '65%', status: 'Normal', threshold: '40-70%' },
    { id: 'SMOKE-001', type: 'Smoke', location: 'Parking Garage', value: 'Clear', status: 'Normal', threshold: 'Clear' },
    { id: 'WATER-001', type: 'Water Level', location: 'Basement', value: '12cm', status: 'Normal', threshold: '<30cm' },
    { id: 'POWER-001', type: 'Power Usage', location: 'Main Grid', value: '85%', status: 'Normal', threshold: '<90%' },
    { id: 'AIR-001', type: 'Air Quality', location: 'Lobby', value: 'Good', status: 'Normal', threshold: 'Good-Excellent' },
    { id: 'MOTION-001', type: 'Motion', location: 'Service Areas', value: 'No Motion', status: 'Normal', threshold: 'Authorized Only' }
  ];

  const securityPersonnel = [
    { id: 'SEC-001', name: 'John Martinez', shift: 'Day Shift', location: 'Main Security Desk', status: 'On Duty', contact: 'Ext. 2001' },
    { id: 'SEC-002', name: 'Sarah Chen', shift: 'Day Shift', location: 'Parking Patrol', status: 'On Duty', contact: 'Ext. 2002' },
    { id: 'SEC-003', name: 'Mike Johnson', shift: 'Night Shift', location: 'Lobby Monitor', status: 'Off Duty', contact: 'Ext. 2003' },
    { id: 'SEC-004', name: 'Lisa Rodriguez', shift: 'Night Shift', location: 'Perimeter Patrol', status: 'Off Duty', contact: 'Ext. 2004' }
  ];

  const recentAlerts = [
    { time: '14:32', type: 'Camera', severity: 'Warning', message: 'CAM-003 connection lost - Parking Garage Level 2', status: 'Active' },
    { time: '13:15', type: 'Access', severity: 'Info', message: 'Unauthorized entry attempt at Emergency Exit B', status: 'Resolved' },
    { time: '12:08', type: 'Sensor', severity: 'Warning', message: 'CAM-006 scheduled for maintenance - Rooftop Garden', status: 'Acknowledged' },
    { time: '11:45', type: 'System', severity: 'Info', message: 'Daily backup completed successfully', status: 'Resolved' },
    { time: '10:20', type: 'Access', severity: 'Alert', message: 'Fire alarm test completed - All systems operational', status: 'Resolved' }
  ];

  const detectionLogs = [
    { 
      id: 'DET-001', 
      time: '15:42', 
      camera: 'CAM-001', 
      location: 'Main Lobby', 
      type: 'Person Detection', 
      confidence: '98%', 
      description: 'Person entered main lobby area',
      status: 'Normal'
    },
    { 
      id: 'DET-002', 
      time: '15:38', 
      camera: 'CAM-004', 
      location: 'Pool Area', 
      type: 'Motion Detection', 
      confidence: '92%', 
      description: 'Motion detected near pool entrance',
      status: 'Normal'
    },
    { 
      id: 'DET-003', 
      time: '15:35', 
      camera: 'CAM-002', 
      location: 'Parking Garage Level 1', 
      type: 'Vehicle Detection', 
      confidence: '95%', 
      description: 'Vehicle entered parking garage',
      status: 'Normal'
    },
    { 
      id: 'DET-004', 
      time: '15:20', 
      camera: 'CAM-007', 
      location: 'Emergency Exit A', 
      type: 'Loitering Detection', 
      confidence: '87%', 
      description: 'Person standing near emergency exit for extended time',
      status: 'Alert'
    },
    { 
      id: 'DET-005', 
      time: '15:15', 
      camera: 'CAM-005', 
      location: 'Gym Entrance', 
      type: 'Face Recognition', 
      confidence: '94%', 
      description: 'Authorized resident John Smith detected',
      status: 'Normal'
    },
    { 
      id: 'DET-006', 
      time: '15:08', 
      camera: 'CAM-001', 
      location: 'Main Lobby', 
      type: 'Object Detection', 
      confidence: '89%', 
      description: 'Unattended bag detected in lobby area',
      status: 'Warning'
    },
    { 
      id: 'DET-007', 
      time: '14:55', 
      camera: 'CAM-008', 
      location: 'Emergency Exit B', 
      type: 'Motion Detection', 
      confidence: '91%', 
      description: 'Motion detected near emergency exit',
      status: 'Normal'
    },
    { 
      id: 'DET-008', 
      time: '14:42', 
      camera: 'CAM-002', 
      location: 'Parking Garage Level 1', 
      type: 'Person Detection', 
      confidence: '96%', 
      description: 'Person walking through parking area',
      status: 'Normal'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'online': return 'bg-green-100 text-green-700';
      case 'offline': return 'bg-red-100 text-red-700';
      case 'maintenance': return 'bg-yellow-100 text-yellow-700';
      case 'on duty': return 'bg-green-100 text-green-700';
      case 'off duty': return 'bg-gray-100 text-gray-700';
      case 'normal': return 'bg-green-100 text-green-700';
      case 'warning': return 'bg-yellow-100 text-yellow-700';
      case 'critical': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'info': return 'bg-blue-100 text-blue-700';
      case 'warning': return 'bg-yellow-100 text-yellow-700';
      case 'alert': return 'bg-red-100 text-red-700';
      case 'critical': return 'bg-red-200 text-red-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <span className="material-symbols-outlined text-indigo-600 text-4xl mr-3">security</span>
            Building Monitoring System
          </h1>
          <p className="mt-2 text-lg text-gray-600">Comprehensive security and building monitoring</p>
        </div>
        <div className="mt-4 lg:mt-0 flex space-x-3">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center">
            <span className="material-symbols-outlined mr-2">videocam</span>
            View Live Feed
          </button>
          <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-xl font-semibold transition-colors flex items-center">
            <span className="material-symbols-outlined mr-2">download</span>
            Export Logs
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">24/7 Security Monitoring</h2>
        <p className="text-lg mb-6 text-gray-700">
          Advanced surveillance and monitoring systems ensure the safety and security of your property. 
          Monitor CCTV feeds, track environmental sensors, and coordinate security personnel from one central dashboard.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-2">monitor</span>
            Control Room
          </button>
          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined mr-2">emergency</span>
            Emergency Alert
          </button>
        </div>
      </div>

      {/* System Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-green-600">videocam</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">7/8</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">CCTV Cameras</h3>
          <p className="text-gray-600 text-sm">Online and operational</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-blue-600">sensors</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">8/8</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Sensors</h3>
          <p className="text-gray-600 text-sm">All systems normal</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-purple-600">security</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">2/4</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Security Staff</h3>
          <p className="text-gray-600 text-sm">Currently on duty</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-yellow-600">warning</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">2</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Active Alerts</h3>
          <p className="text-gray-600 text-sm">Require attention</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
          { id: 'cctv', label: 'CCTV Monitoring', icon: 'videocam' },
          { id: 'sensors', label: 'Sensor Network', icon: 'sensors' },
          { id: 'personnel', label: 'Security Personnel', icon: 'badge' },
          { id: 'detection', label: 'Detection Logs', icon: 'visibility' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center ${
              activeTab === tab.id
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span className="material-symbols-outlined mr-2 text-sm">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      {activeTab === 'cctv' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-6">CCTV Camera Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cctvCameras.map((camera) => (
              <div key={camera.id} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-900">{camera.id}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(camera.status)}`}>
                    {camera.status}
                  </span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{camera.location}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Quality: {camera.quality}</div>
                  <div>Updated: {camera.lastUpdate}</div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                    View Feed
                  </button>
                  <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                    Settings
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'sensors' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-6">Environmental Sensor Network</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sensor ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Threshold</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sensors.map((sensor) => (
                  <tr key={sensor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sensor.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{sensor.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{sensor.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sensor.value}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{sensor.threshold}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(sensor.status)}`}>
                        {sensor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium mr-3">View Data</button>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">Configure</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'personnel' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-6">Security Personnel Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityPersonnel.map((person) => (
              <div key={person.id} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      <span className="material-symbols-outlined text-gray-600">person</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
                      <p className="text-sm text-gray-600">{person.id}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(person.status)}`}>
                    {person.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-2 text-sm">schedule</span>
                    {person.shift}
                  </div>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-2 text-sm">location_on</span>
                    {person.location}
                  </div>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-2 text-sm">phone</span>
                    {person.contact}
                  </div>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                    Contact
                  </button>
                  <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                    Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'detection' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">AI Detection Logs</h2>
            <div className="flex space-x-3">
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm" title="Filter by detection type">
                <option>All Types</option>
                <option>Person Detection</option>
                <option>Vehicle Detection</option>
                <option>Motion Detection</option>
                <option>Face Recognition</option>
                <option>Object Detection</option>
                <option>Loitering Detection</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm" title="Filter by status">
                <option>All Status</option>
                <option>Normal</option>
                <option>Warning</option>
                <option>Alert</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detection ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Camera</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {detectionLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{log.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{log.camera}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{log.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{log.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.confidence}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{log.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        log.status === 'Normal' ? 'bg-green-100 text-green-700' : 
                        log.status === 'Warning' ? 'bg-yellow-100 text-yellow-700' : 
                        log.status === 'Alert' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium mr-3">View Clip</button>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">Export</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'dashboard' && (
        <div className="space-y-8">
          {/* Live Security Feed - 8 Channel CCTV */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Live Security Feed - 8 Channel CCTV</h3>
              <div className="flex space-x-2">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Full Screen
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Record All
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cctvCameras.map((camera, index) => (
                <div key={camera.id} className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                  {/* Placeholder CCTV Feed */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                    {/* Mock security camera feed overlay */}
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    
                    {/* Camera feed placeholder - could be replaced with actual video streams */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {camera.status === 'Online' ? (
                        <div className="text-center">
                          {/* Simulate live feed with animated dots */}
                          <div className="w-16 h-16 bg-gray-600 rounded-full mb-2 mx-auto flex items-center justify-center">
                            <span className="material-symbols-outlined text-gray-300 text-2xl">videocam</span>
                          </div>
                          <div className="flex justify-center space-x-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse delay-100"></div>
                            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse delay-200"></div>
                          </div>
                        </div>
                      ) : camera.status === 'Offline' ? (
                        <div className="text-center">
                          <span className="material-symbols-outlined text-red-400 text-3xl mb-2">signal_disconnected</span>
                          <div className="text-red-400 text-xs">OFFLINE</div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <span className="material-symbols-outlined text-yellow-400 text-3xl mb-2">build</span>
                          <div className="text-yellow-400 text-xs">MAINTENANCE</div>
                        </div>
                      )}
                    </div>
                    
                    {/* Camera info overlay */}
                    <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                      <div className="font-semibold">{camera.id}</div>
                      <div className="text-xs opacity-80">{camera.location}</div>
                    </div>
                    
                    {/* Status indicator */}
                    <div className="absolute top-2 right-2">
                      <div className={`w-2 h-2 rounded-full ${
                        camera.status === 'Online' ? 'bg-green-400' : 
                        camera.status === 'Offline' ? 'bg-red-400' : 'bg-yellow-400'
                      }`}></div>
                    </div>
                    
                    {/* Recording indicator */}
                    {camera.status === 'Online' && (
                      <div className="absolute bottom-2 left-2 flex items-center text-red-400 text-xs">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-1 animate-pulse"></div>
                        REC
                      </div>
                    )}
                    
                    {/* Quality indicator */}
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                      {camera.quality}
                    </div>
                  </div>
                  
                  {/* Camera controls */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="flex space-x-2">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-sm">fullscreen</span>
                      </button>
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-sm">videocam</span>
                      </button>
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-sm">settings</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detection Logs Preview and Recent Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Detection Logs Preview */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Recent AI Detections</h3>
                <button 
                  onClick={() => setActiveTab('detection')}
                  className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                  View All →
                </button>
              </div>
              <div className="space-y-3">
                {detectionLogs.slice(0, 5).map((log) => (
                  <div key={log.id} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`w-2 h-2 rounded-full ${
                          log.status === 'Normal' ? 'bg-green-500' : 
                          log.status === 'Warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></span>
                        <span className="text-sm font-medium text-gray-900">{log.type}</span>
                        <span className="text-xs text-blue-600">{log.camera}</span>
                      </div>
                      <span className="text-xs text-gray-500">{log.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{log.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">{log.location}</span>
                      <span className="text-xs font-medium text-gray-700">Confidence: {log.confidence}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Security Alerts */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Security Alerts</h3>
              <div className="space-y-3">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className="text-xs text-gray-500">{alert.time}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{alert.message}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{alert.type}</span>
                      <span className="text-xs font-medium text-gray-700">{alert.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};