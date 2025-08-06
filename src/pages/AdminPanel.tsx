import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import { Users, BarChart3, Settings, Shield, AlertTriangle, TrendingUp } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/20 to-orange-50/20 dark:from-gray-950 dark:via-red-950/20 dark:to-orange-950/20 transition-all duration-300">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">Admin Panel</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Manage users, monitor system performance, and configure settings</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">1,234</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center">
              <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 rounded-xl">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Active Portfolios</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">856</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center">
              <div className="p-3 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/50 dark:to-yellow-800/50 rounded-xl">
                <BarChart3 className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Monthly Views</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">45.2K</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center">
              <div className="p-3 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Issues</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Management */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <div className="px-6 py-4 border-b border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <Users className="w-5 h-5 mr-2" />
                User Management
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700/50">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">John Doe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">john@example.com</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">Edit</button>
                    <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium">Suspend</button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700/50">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Jane Smith</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">jane@example.com</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">Edit</button>
                    <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium">Suspend</button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Mike Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">mike@example.com</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">Edit</button>
                    <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium">Suspend</button>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg">
                  View All Users
                </button>
              </div>
            </div>
          </div>

          {/* System Settings */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <div className="px-6 py-4 border-b border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                System Settings
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Maintenance Mode</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Enable maintenance mode for system updates</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded transition-colors" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">User Registration</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Allow new user registrations</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded transition-colors" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Email Notifications</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Send system notifications via email</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded transition-colors" />
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <div className="px-6 py-4 border-b border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-sm"></div>
                <p className="text-sm text-gray-600 dark:text-gray-300">New user registered: alice@example.com</p>
                <span className="text-xs text-gray-400 dark:text-gray-500">2 minutes ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-sm"></div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Portfolio published by john@example.com</p>
                <span className="text-xs text-gray-400 dark:text-gray-500">15 minutes ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-sm"></div>
                <p className="text-sm text-gray-600 dark:text-gray-300">System backup completed</p>
                <span className="text-xs text-gray-400 dark:text-gray-500">1 hour ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
