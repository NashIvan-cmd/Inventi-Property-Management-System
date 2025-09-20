import React from 'react';

export const Marketplace: React.FC = () => {
  const featuredListings = [
    {
      id: 1,
      title: 'Mountain Bicycle',
      description: 'Lightly used mountain bike in excellent condition',
      price: '$300',
      seller: 'John Smith',
      category: 'Buy & Sell',
      image: 'bicycle',
      posted: '3 days ago'
    },
    {
      id: 2,
      title: 'House Cleaning Service',
      description: 'Professional cleaning, flexible schedule',
      price: '$80/session',
      seller: 'Maria Garcia',
      category: 'Services',
      image: 'cleaning',
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'Power Drill',
      description: 'Available for borrowing, includes bits',
      price: 'Free',
      seller: 'Mike Chen',
      category: 'Share & Borrow',
      image: 'tools',
      posted: '2 days ago'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
          <p className="mt-2 text-lg text-gray-600">Community marketplace for residents</p>
        </div>
        <div className="mt-4 lg:mt-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center">
            <span className="material-symbols-outlined mr-2">add</span>
            + New Listing
          </button>
        </div>
      </div>

      {/* Main Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-blue-600 text-2xl">storefront</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Buy & Sell</h3>
          <p className="text-gray-600 mb-6">Trade items safely within your community</p>
          <div className="text-blue-600 font-semibold">12 Active Listings</div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-green-600 text-2xl">handyman</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Services</h3>
          <p className="text-gray-600 mb-6">Offer or find services from neighbors</p>
          <div className="text-green-600 font-semibold">8 Service Offers</div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-purple-600 text-2xl">share</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Share & Borrow</h3>
          <p className="text-gray-600 mb-6">Share resources with community members</p>
          <div className="text-purple-600 font-semibold">5 Items Available</div>
        </div>
      </div>

      {/* Featured Listings Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-6">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredListings.map((listing) => (
            <div key={listing.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-full h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                <span className="material-symbols-outlined text-gray-400 text-4xl">
                  {listing.image === 'bicycle' ? 'pedal_bike' : 
                   listing.image === 'cleaning' ? 'cleaning_services' : 'construction'}
                </span>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{listing.title}</h3>
                <span className="text-lg font-bold text-blue-600">{listing.price}</span>
              </div>
              <p className="text-gray-600 mb-3">{listing.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">by {listing.seller}</span>
                <span className="text-gray-500">{listing.posted}</span>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  View Details
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-medium transition-colors">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity and Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Marketplace Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="material-symbols-outlined text-blue-600 text-sm">storefront</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">New listing: Mountain Bicycle</p>
                <p className="text-xs text-gray-500">Posted 3 days ago by John Smith</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="material-symbols-outlined text-green-600 text-sm">handyman</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Service offered: House Cleaning</p>
                <p className="text-xs text-gray-500">Posted 1 day ago by Maria Garcia</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="material-symbols-outlined text-purple-600 text-sm">share</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Available for sharing: Power Drill</p>
                <p className="text-xs text-gray-500">Posted 2 days ago by Mike Chen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-semibold mb-4">Marketplace Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Total Active Listings</span>
              <span className="text-lg font-bold text-gray-900">25</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Services Available</span>
              <span className="text-lg font-bold text-green-600">8</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Items to Borrow</span>
              <span className="text-lg font-bold text-purple-600">5</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Active Members</span>
              <span className="text-lg font-bold text-blue-600">42</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};