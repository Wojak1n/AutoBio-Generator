import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import { User, Bell, Shield, Palette, Globe, Save } from 'lucide-react';

const Settings: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/30 transition-all duration-300">
      <Navbar />
      
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-xl border border-gray-200/50 dark:border-gray-700/50">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-8">Settings</h1>
            
            {/* Profile Settings */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profile Settings
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.name}
                    className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                    placeholder="Enter your display name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    className="block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Email Notifications</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Receive email updates about your portfolio</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded transition-colors" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Analytics Reports</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Weekly analytics reports</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded transition-colors" />
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Privacy
              </h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Public Portfolio</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Make your portfolio visible to everyone</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded transition-colors" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Search Engine Indexing</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Allow search engines to index your portfolio</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded transition-colors" />
                </div>
              </div>
            </div>

            {/* Theme Settings */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Appearance
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
                  Theme
                </label>
                <select className="block w-full max-w-xs border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
            </div>

            {/* Plan Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Subscription
              </h2>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Current Plan: {user?.plan?.toUpperCase()}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {user?.plan === 'free' && 'Upgrade to unlock premium features and themes'}
                      {user?.plan === 'pro' && 'Enjoy premium themes and advanced analytics'}
                      {user?.plan === 'premium' && 'You have access to all features'}
                    </p>
                  </div>
                  {user?.plan === 'free' && (
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg">
                      Upgrade Plan
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 flex items-center shadow-lg">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
